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
const childP = require('child_process');
const configG = require('../config');
/*const requireNPM = require('require-npm').decorate(require);*/
const rimrafAsync = Promise.promisify(require('rimraf'));
const streamToPromise = require('./streamToPromise');
const appCss= require('./build-scss').appCss;
const utils= require('./utils/utils');
const npmi= require('npmi');
const buildCustomJs= require('./buildCustomJs');

gulp.task('serve', ['bundle-js'], function() {
    //1. serve with default settings
    /* var server = gls.static(); //equals to gls.static('public', 3000);
     server.start();*/

    //2. serve at custom port

    if (gulp.tasks.runAppStore) {
        gulp.start('runAppStore')
    }

    //var server = gls.static(['primo-explore/www','primo-explore/api'], 8888);
    const express = require('express');
    const appS = express();
    appS.use( bodyParser.json() );
    appS.use(bodyParser.urlencoded({extended: true}));
    appS.use(express.static('primo-explore/www'));



    appS.get('/feature', function (req, res) {
        if(!process.cwd().includes("Primo-App-Store")) {
            process.chdir("Primo-App-Store");
        }
        var userId= utils.getUserId(req);
        // configG.setView(userId);
        // childP.exec('npm install --prefix primo-explore/custom/'+req.query.dirName+' '+req.query.id);
        npmi({path: 'primo-explore/custom/' + userId, name: req.query.id}, (err, result)=>{
            if (err){
                console.log('failed to install feature:');
                utils.sendErrorResponse(res, err);
            }
            else{
                buildCustomJs.customJs(userId).then(()=>{
                    var response = {data:'noam', status: '200'};
                    res.send(response);
                }, (err)=>{
                    console.log('failed to build custom js:');
                    utils.sendErrorResponse(res, err);
                });

            }
        });
        // childP.exec('npm install --prefix primo-explore/custom/'+userId+' '+req.query.id);
        //
        // var response = {data:'noam'};
        // res.send(response);
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
            {name: 'favicon', maxCount:1}
        ]);
    appS.post('/images', imagesUpload, (req, res)=>{
        let userId= utils.getUserId(req);
        let baseDir = utils.getUserCustomDir(userId);
        let data = req.files;
        console.log(data);
        let fileWritePromises=[];
        for (let key in data){
            let fileObject = data[key][0];
            let fileName= fileObject.fieldname + '.' + fileObject.originalname.split('.')[1];
            let filePath= baseDir + '/img/' + fileName;
            console.log(filePath);
            fileWritePromises.push(
                fs.writeFileAsync(filePath, Buffer.from(fileObject.buffer))
            )
        }
        Promise.all(fileWritePromises).then(()=>{
            let response = {status:'200'};
            res.send(response);
        })
    });



    appS.get('/start', function (req, res) {
        if(!process.cwd().includes("Primo-App-Store")) {
            process.chdir("Primo-App-Store");
        }
        var confObj = {"view":req.query.view,
            "url": req.query.url};
        // var d = new Date();
        // var n = d.getTime();
        var userId= utils.getUserId(req);

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
                gulp.start('custom-js');
            });
    })



        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({status:'200',dirName:userId}));
    })

    appS.listen(8004, function () {
        console.log('Example app listening on port 8004!')
    })
    /*server.start();*/


    /*    server.get('/app', function (req, res) {
     console.log('22222');
     res.send('Hello World!')
     })*/
    /*//3. serve multi folders
     var server = gls.static(['dist', '.tmp']);
     server.start();*/

    //use gulp.watch to trigger server actions(notify, start or stop)
    /*gulp.watch(['primo-explore/app/!**!/!*','primo-explore/www/!**!/!*.css', 'primo-explore/www/!**!/!*.css'], function (file) {
     console.log('11111');
     server.notify.apply(server, [file]);
     });*/
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
