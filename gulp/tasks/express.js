var gulp = require('gulp');
var gls = require('gulp-live-server');
const browserify = require("browserify");
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'))
const fstream = require('fstream')
const path = require('path')
const unzip = require('unzip')
const template = require('lodash/template');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const cookieParser = require('cookie-parser');
const zip = require('gulp-zip');
const childP = require('child_process');
const configG = require('../config');
/*const requireNPM = require('require-npm').decorate(require);*/
const rimrafAsync = Promise.promisify(require('rimraf'));
const streamToPromise = require('./streamToPromise');
const appCss= require('./build-scss').appCss;
const utils= require('./utils/utils');
const npmi= require('npmi');
const rename= require('gulp-rename');
const buildCustomJs= require('./buildCustomJs');
const storage = require('node-persist');
const httpProxy= require('http-proxy');
const http = require('http');
const primoProxy = require('../primoProxy');
const config = require('../config');
const _url = require("url");
const https = require('https');
const streamifier = require('streamifier');
const ncp = require('ncp').ncp;

let proxy = httpProxy.createProxyServer({changeOrigin: true});
proxy.on('error', function (err, req, res) {
    utils.sendErrorResponse(res, err);
});

gulp.task('serve', ['bundle-js', 'watch-app'], function() {
    let appName = 'primo-explore';
    //1. serve with default settings
    /* var server = gls.static(); //equals to gls.static('public', 3000);
     server.start();*/

    //2. serve at custom port

    storage.initSync({
        dir: 'userManifestStorage/'
    });

    if (gulp.tasks.runAppStore) {
        gulp.start('runAppStore')
    }

    //var server = gls.static(['primo-explore/www','primo-explore/api'], 8888);
    const express = require('express');
    const appS = express();
    appS.use( bodyParser.json() );
    appS.use(bodyParser.urlencoded({extended: true}));
    appS.use(express.static('primo-explore/www'));
    appS.use(cookieParser());



    appS.get('/feature', function (req, res) {
        if(!process.cwd().includes("Primo-App-Store")) {
            process.chdir("Primo-App-Store");
        }
        let userId= utils.getUserId(req);

        storage.getItem(userId).then((userManifest)=>{
            let npmId= req.query.id;
            let hookName= req.query.hook;
            npmi({path: 'primo-explore/custom/' + userId, name: npmId}, (err, result)=>{
                if (err){
                    console.log('failed to install feature:');
                    utils.sendErrorResponse(res, err);
                }
                else{
                    let hookFeatureList= userManifest[hookName]? userManifest[hookName] : [];
                    hookFeatureList.push(npmId);
                    buildCustomJs.buildCustomHookJsFile(utils.getUserCustomDir(userId), hookName, hookFeatureList).then(()=>{
                        buildCustomJs.customJs(userId).then(()=>{
                            userManifest[hookName] = hookFeatureList;
                            storage.setItem(userId, userManifest);
                            var response = {status: '200'};
                            res.send(response);
                        }, (err)=>{
                            console.log('failed to build custom js: ' + err);
                        });
                    }, (err)=>{
                        console.log('failed to build custom hook js file');
                        utils.sendErrorResponse(res, err);
                    });
                }
            });
        });
    });

    appS.get('/remove_feature', function (req, res) {
        let userId= utils.getUserId(req);
        storage.getItem(userId).then((userManifest)=>{
            let npmId= req.query.id;
            let hookName= req.query.hook;
            let hookFeatureList= userManifest[hookName]? userManifest[hookName] : [];
            let index = hookFeatureList.indexOf(npmId);
            if (index === -1){
                //for some reason we tried to remove a feature which wasn't installed. No need to do anything...
                res.send({status: '200'});
                return;
            }
            else{
                hookFeatureList.splice(index, 1); // remove the feature from the installed feature list
                buildCustomJs.buildCustomHookJsFile(utils.getUserCustomDir(userId), hookName, hookFeatureList).then(()=>{
                    buildCustomJs.customJs(userId).then(()=>{
                        userManifest[hookName] = hookFeatureList;
                        storage.setItem(userId, userManifest);
                        var response = {status: '200'};
                        res.send(response);
                    }, (err)=>{
                        console.log('failed to build custom js: ' + err);
                    });
                }, (err)=>{
                    console.log('failed to build custom hook js file');
                    utils.sendErrorResponse(res, err);
                });

            }
        });
    })

    appS.get('/restart',function(req,res){
        if(!process.cwd().includes("Primo-App-Store")) {
            process.chdir("Primo-App-Store");
        }
        var userId= utils.getUserId(req);
        // configG.setView(req.query.dirName);
        configG.setView(userId);

        gulp.start('custom-js');
        // gulp.start('setup_watchers');
    })

    appS.get('/colors', function(req, res){
        var userId= utils.getUserId(req);
        var baseDir = utils.getUserCustomDir(userId);
        fs.readFile(baseDir+'/colors.json', (err, data)=>{
            if(err){
                utils.sendErrorResponse(res, err);
            }
            else{
                res.send(data);
            }
        });
    });

    appS.post('/colors', function (req, res) {
        var colors = req.body.data.colors;
        var conf = req.body.data.conf;
        var userId= utils.getUserId(req);
        // configG.setView(conf.dirName);
        configG.setView(userId);
        var baseDir = utils.getUserCustomDir(userId);
        process.argv = ["","", "","--view="+conf.dirName];

        console.log('aaa'+baseDir);
        fs.writeFileAsync(baseDir+'/colors.json', JSON.stringify(colors), { encoding: 'utf-8' })
            .then(() => {
                console.log('finished writing colors.json');
                appCss(userId).then(()=>{
                    console.log('finished app css');
                    var response = {status:'200'};
                    res.send(response);
                }, ()=>{
                    console.log('failed app css');
                    utils.sendErrorResponse(res, err);
                });
            });
    })

    let imagesUpload= upload.fields([
        {name: 'library-logo', maxCount:1},
        {name: 'favicon', maxCount:1},
        {name: 'resource-icons' , maxCount:10}
    ]);
    appS.post('/images', imagesUpload, (req, res)=>{
        let userId= utils.getUserId(req);
        let baseDir = utils.getUserCustomDir(userId);
        let data = req.files;
        console.log(data);
        let fileWritePromises=[];
        for (let key in data){
            for (let fileObject of data[key]){
                let fileName='';
                if (key === 'resource-icons'){
                    fileName = fileObject.originalname;
                }
                else{
                    fileName= fileObject.fieldname + '.' + fileObject.originalname.split('.')[1];
                }
            let filePath= baseDir + '/img/' + fileName;
            console.log(filePath);
            fileWritePromises.push(
                fs.writeFileAsync(filePath, Buffer.from(fileObject.buffer))
            )
        }
        }
        Promise.all(fileWritePromises).then(()=>{
            let response = {status:'200'};
            res.send(response);
        })
    });

    appS.get('/package', (req, res)=>{
        let userId= utils.getUserId(req);
        let vid= req.cookies['viewForProxy'];
        storage.getItem(userId).then((userManifest)=>{
            fs.writeFileSync('./primo-explore/custom/'+userId + '/features.json', JSON.stringify(userManifest));
            let readableStream = gulp.src(['./primo-explore/custom/'+userId,'./primo-explore/custom/'+userId+'/html/**',
                './primo-explore/custom/'+userId+'/img/**','./primo-explore/custom/'+userId+'/css/custom1.css',
                './primo-explore/custom/'+userId+'/js/custom.js', './primo-explore/custom/'+userId + '/features.json',
                './primo-explore/custom/'+userId + '/colors.json'], {base: './primo-explore/custom'})
                .pipe(rename((file)=>{
                    file.basename= file.basename.replace(userId, vid);
                    file.dirname = file.dirname.replace(userId, vid);
                }))
                .pipe(zip(vid+'.zip', {buffer: true}));
            let buffer;
            readableStream.on('data', (data)=>{
                buffer= data;
            });
            readableStream.on('end',()=>{
                res.type('zip');
                res.end(buffer._contents, 'binary');
            });
        });
    });


    let packageUpload= upload.fields([
        {name: 'package', maxCount:1}
    ]);
    appS.post('/package', packageUpload,  (req, res)=>{
        console.log('started package post!');
        let userId= utils.getUserId(req);
        let fileObject = req.files.package[0];
        let packagePath = './primo-explore/uploadedPackages/' + userId;
        let writeStream = fstream.Writer({
            path: packagePath,
            type: 'Directory'
        });
        let readStream = streamifier.createReadStream(Buffer.from(fileObject.buffer));
        let zipStream = readStream
            .pipe(unzip.Parse())
            .pipe(writeStream)
        let promise=  streamToPromise(zipStream).then(()=>{
            console.log('unziped package');
            let directories = utils.getDirectories(packagePath);
            if (directories.length !== 1){
                utils.sendErrorResponse(res, 'malformed package structure');
                return console.error('malformed package');
            }
            let dirName= /[^\\]*$/.exec(directories[0])[0];
            fs.readFile(packagePath + '/' + dirName + '/features.json', 'utf8', (err, data)=>{
                if (err){
                    console.log('error reading file features.json: ' + err);
                }
                let userManifest=data? JSON.parse(data) : {};
                console.log(userManifest);
                fs.renameSync(packagePath + '/' + dirName + '/js/custom.js', packagePath + '/' + dirName + '/js/customUploadedPackage.js');
                fs.readFile(packagePath + '/' + dirName + '/js/customUploadedPackage.js', 'utf8', (err,data)=> {
                    data = utils.unwrapJs(data); //during concatenation we wrap code with function so we need to unwrap before we concatenate

                    //remove all code generated by custom.js.tmpl
                    data = data.replace(/\/\/Auto generated code by primo app store DO NOT DELETE!!! -START-[\S\s]*?\/\/Auto generated code by primo app store DO NOT DELETE!!! -END-/g, '');

                    //we rename components placed directly on hooks. We do this so that we can place several features on one hook without conflicts
                    let manuallyAddedComponentsManifest = {};
                    data = utils.fixManuallyAddedComponents(data ,manuallyAddedComponentsManifest);

                    let customModuleDefinitionLineRegex = /[^\n\r]*app[\s]*?=[\s]*?angular.module\([\S\s]*?\);?/;
                    let customModuleDefinitionLine = data.match(customModuleDefinitionLineRegex);
                    data = data.replace(customModuleDefinitionLineRegex, ''); //delete the module line from the js since we are moving it to custom.module.js
                    let customModuleFileWritePromise = new Promise((resolve,reject)=>{
                        if (customModuleDefinitionLine){
                            fs.writeFile(packagePath + '/' + dirName + '/js/custom.module.js', customModuleDefinitionLine[0], 'utf8',(err)=> {
                                if(err){
                                    reject();
                                    return console.error('failed to create custom.module.js: ' + err);
                                }
                                else{
                                    resolve();
                                }
                            })
                        }
                        else{
                            resolve();
                        }
                    });


                    let hookPromiseArr = [];
                    for (let hook in userManifest) {
                        let npmInstallPromiseArr= [];
                        let hookFeaturesList = userManifest[hook];
                        if (hookFeaturesList.length > 0) {
                            hookPromiseArr.push(new Promise((resolve, reject) => {
                                for (let feature of hookFeaturesList) {
                                    data = data.replace(utils.dashSeparatedToCamelCase(feature), 'toRemove' + new Date().getTime());
                                    npmInstallPromiseArr.push(utils.npmInstallWithPromise(packagePath + '/' + dirName, feature));
                                }
                                Promise.all(npmInstallPromiseArr).then(() => {
                                    let manuallyAddedComponentsForHook = manuallyAddedComponentsManifest[hook] || [];
                                    userManifest[hook] = hookFeaturesList.concat(manuallyAddedComponentsForHook);
                                    buildCustomJs.buildCustomHookJsFile(packagePath + '/' + dirName, hook, userManifest[hook]).then(() => {
                                        resolve();
                                    }, (err) => {
                                        reject(err);
                                        utils.sendErrorResponse(res, err);
                                        return console.error('failed to build hook js file for: ' + hook)
                                    });
                                }, (err) => {
                                    reject(err);
                                    utils.sendErrorResponse(res, err);
                                    return console.error('failed to npm install feature for hook: ' + hook);
                                });
                            }));
                        }
                    }

                    fs.writeFile(packagePath + '/' + dirName + '/js/customUploadedPackage.js', data, 'utf8',(err)=> {
                        if (err){
                            return console.log(err);
                        }
                        Promise.all(hookPromiseArr.concat(customModuleFileWritePromise)).then(()=>{
                            new Promise((resolve, reject)=>{
                                ncp(packagePath + '/' + dirName, utils.getUserCustomDir(userId), function (err) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else{
                                        resolve();
                                    }
                                });
                            }).then(()=>{
                                storage.setItem(userId, userManifest);
                                console.log('uploaded package successfully!');
                                let response = {status:'200'};
                                res.send(response);
                            }, (err)=>{
                                utils.sendErrorResponse(res, 'internal error');
                                return console.error('failed to copy uploaded package: ' + err);
                            }).finally(()=>{
                                // rimrafAsync(packagePath); //delete uploaded package once copy is finished
                            });
                        }, (err)=>{
                            rimrafAsync(packagePath); //delete uploaded package
                            utils.sendErrorResponse(res, 'internal error');
                            return console.error('failed to upload package');
                        });
                    });
                });

            });
        });

    });



    appS.get('/start', function (req, res) {
        if(!process.cwd().includes("Primo-App-Store")) {
            process.chdir("Primo-App-Store");
        }
        var confObj = {"view":req.query.view,
            "url": req.query.url};
        let userId= utils.getUserId(req);
        userId = userId && userId !== '' ? userId :  utils.createNewUserId();
        console.log('started with user ID: ' + userId);


        configG.setView(userId);

        //create a directory from MOCK
        let readStream = fs.createReadStream('templatePackage/VIEW_CODE.zip');
        /*writeStream2 = fstream.Writer({
         path: path.resolve(__dirname, '../../primo-explore/custom/' + n),
         type: 'Directory'
         });*/
        let writeStream = fstream.Writer({
            path: path.resolve(__dirname, '../../tmp'),
            type: 'Directory'
        });
        let p1 = rimrafAsync('../../tmp')
            .then(
                () => {
                    let zipStream = readStream
                        .pipe(unzip.Parse())
                        .pipe(writeStream)
                    return streamToPromise(zipStream)
                });
        //let p2 = rimrafAsync("primo-explore-devenv/primo-explore/custom/" + n);
        Promise.join(p1).then(() => {
            return fs.rename("./tmp/VIEW_CODE", "primo-explore/custom/" + userId, ()=>{
                buildCustomJs.customJs(userId);
            });
        })

        storage.getItem(userId).then((userFeaturesManifest)=>{
            let userInstalledFeaturesList = [];
            if (!userFeaturesManifest){
                console.log('set new user features manifest');
                storage.setItem(userId, {});
            }
            else{
                console.log('found features manifest for existing user');
                userInstalledFeaturesList= utils.getUserInstalledFeaturesList(userFeaturesManifest);
            }

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({status:'200',dirName:userId, installedFeatures: userInstalledFeaturesList}));
        });

    })




    appS.all('*',function(req, res, next){
        let cookies = utils.parseCookies(req);
        let urlForProxy = cookies['urlForProxy'];
        let viewForProxy = cookies['viewForProxy'];
        let ve = cookies['ve'];
        let confPath = (ve === 'true') ? '/primaws/rest/pub/configuration' : '/primo_library/libweb/webservices/rest/v1/configuration';
        let confAsJsPath = (ve === 'true') ? '/discovery/config_' : '/primo-explore/config_';
        let appPrefix = (ve === 'true') ? 'discovery' : 'primo-explore';
        let fixConfiguration = function (res, res1, isConfByFile) {
            let dirForProxy = utils.getUserId(req);
            let body = '';

            res1.setEncoding('utf8');

            res1.on("data", function (chunk) {
                body = body + chunk;
            });

            res1.on("end", function () {

                let vid = dirForProxy || config.view() || '';
                let customizationProxy = primoProxy.getCustimazationObject(vid, appName);

                if (isConfByFile) {
                    res.end('');

                } else {
                    let jsonBody = JSON.parse(body);
                    let newBodyObject = jsonBody;

                    newBodyObject.customization = customizationProxy;
                    let newBody = JSON.stringify(newBodyObject);

                    res.body = newBody;

                    /*console.log('newBody: ' newBody);*/
                    res.end(newBody);
                }

            });
        };
        if (req.url.startsWith(confAsJsPath) || req.url.startsWith(confPath)) {
            let isConfByFile = false;
            if (req.url.startsWith(confAsJsPath)) {
                isConfByFile = true;
            }
            let proxyUrl = urlForProxy || config.PROXY_SERVER;
            let base = proxyUrl.replace('http:\/\/', '').replace('https:\/\/', '');
            let method = proxyUrl.split('://')[0];
            let parts = base.split(':');
            let hostname = parts[0];
            let port = parts[1];


            let options = {
                hostname: hostname,
                port: port,
                path: req.url,
                method: 'GET',
                headers: {
                    'X-From-ExL-API-Gateway': '1'
                }
            };
            let requestObject = http;
            if (method === 'https') {
                requestObject = https;
            }
            let req2 = requestObject.request(options, (res1) => {
                fixConfiguration(res, res1, isConfByFile);
            });

            req2.on('error', (e) => {
                _next(req, res, urlForProxy, viewForProxy);
            });

            req2.write('');
            req2.end();

        }
        else {
            _next(req, res, urlForProxy, viewForProxy,appPrefix);
        }
    })
    appS.listen(8004, function () {
        console.log('Example app listening on port 8004!')
    });
    /*server.start();*/
    function _next(req,res,targetUrl,vid,appPrefix){


        console.log('vid=' + vid);
        console.log('url=' + targetUrl);
        let path = _url.parse(req.url).pathname;


        let proxyUrl = targetUrl || config.PROXY_SERVER;
        let fixedurl = proxyUrl+req.url;
        let base = proxyUrl.replace('http:\/\/','').replace('https:\/\/','');
        let method = proxyUrl.split('://')[0];
        let parts = base.split(':');
        let hostname = parts[0];
        let port = parts[1];

        console.log('this is the current path: ' + path);
        if(path.indexOf('/'+appPrefix+'/custom') > -1) {
            console.log('req url=' + _url.parse(req.url));
            let fixedPath = path.replace('/discovery/', '/primo-explore/');
            let filePath= process.cwd() + fixedPath;
            console.log(filePath);
            let filestream= fs.createReadStream(filePath);
            filestream.on('error', (err)=>{
                utils.sendErrorResponse(res, err);
            });
            filestream.pipe(res);
            return;
        }

        //fixes bug where bodyParser interferes with post requests in http proxy
        req.removeAllListeners('data');
        req.removeAllListeners('end');
        process.nextTick(function () {
            if(req.body) {
                req.emit('data', JSON.stringify(req.body));
            }
            req.emit('end');
        });
        proxy.web(req, res, { target: targetUrl });
    }
});

gulp.task('custom', function() {
    var server = gls('primo-explore/app/server.js');
    server.start().then(function(result) {
        console.log('Server exited with result:', result);
        process.exit(result.code);
    });
    gulp.watch(['primo-explore/www/**/*.css', 'primo-explore/www/**/*.css'], function(file) {
        server.notify.apply(server, [file]);
    });
    gulp.watch('primo-explore/app/server.js', server.start);
});


function buildByBrowserify() {
    return browserify({
        ignore: ['gulpfile'],
        debug: true,
        entries: './primo-explore/www/renderer.js',
        path: './primo-explore/app/**/*.js'

    })
        .bundle()
        .pipe(fs.createWriteStream('./primo-explore/www/bundle.js'));
}
