'use strict';

let gulp = require('gulp');
let zip = require('gulp-zip');
let config = require('../config');
let http = require('http');
let https = require('https');
let util = require('util');
let browserSyncManager = require('../browserSyncManager');
let primoProxy = require('../primoProxy');
let glob = require('glob');
let prompt = require('prompt');
let runSequence = require('run-sequence');
var _url = require("url");
const bodyParser = require('body-parser');
const fs= require('fs');
// let viewForProxy;
// let urlForProxy;
// let dirForProxy;

let utils= require('./utils/utils');

gulp.task('setup_watchers', gulp.series('watch-js', 'watch-custom-scss', 'watch-css'), () => {
    gulp.watch(config.buildParams.customPath(),() => {
        return browserSyncManager.reloadServer();
    });
    gulp.watch(config.buildParams.customCssPath(),() => {
        return gulp.src(config.buildParams.customCssPath())
            .pipe(browserSyncManager.streamToServer());
    });
});

let viewProxy = {};

gulp.task('connect:primo_explore', function() {
    let appName = 'primo-explore';
    browserSyncManager.startServer({
        label: 'production',
        middleware:[
            function(req,res,next) {
                let cookies= utils.parseCookies(req);
                let urlForProxy= cookies['urlForProxy'];
                let viewForProxy= cookies['viewForProxy'];
                console.log(urlForProxy);
                console.log(viewForProxy);
                let confPath = config.getVe() ? '/primaws/rest/pub/configuration' : '/primo_library/libweb/webservices/rest/v1/configuration';
                let confAsJsPath = '/primo-explore/config_';
                var regex = /[?&]([^=#]+)=([^&#]*)/g,
                    url = req.url,
                    params = {},
                    match;
                while(match = regex.exec(url)) {
                    params[match[1]] = match[2];
                    if(match[1] === 'vid'){
                        console.log('vid=' + params[match[1]]);
                        if(!viewForProxy)
                            viewForProxy = params[match[1]];
                    }
                    if(match[1] === 'url'){
                        if(!urlForProxy)
                            urlForProxy = params[match[1]];
                    }

                    // if(match[1] === 'dirName'){
                    //     if(!dirForProxy)
                    //         dirForProxy = params[match[1]];
                    // }


                }


                let fixConfiguration = function(res,res1,isConfByFile){
                    let dirForProxy= utils.getUserId(req);
                    let body = '';

                    res1.setEncoding('utf8');

                    res1.on("data", function(chunk) {
                        body = body + chunk;
                    });

                    res1.on("end", function(){

                        let vid = dirForProxy || config.view() || '';
                        let customizationProxy = primoProxy.getCustimazationObject(vid,appName);


                        if(isConfByFile){
                            res.end('');

                        }else{

                            let jsonBody = JSON.parse(body);
                            let newBodyObject = jsonBody;

                            newBodyObject.customization = customizationProxy;
                            let newBody = JSON.stringify(newBodyObject);

                            res.body = newBody;

                            /*console.log('newBody: ' +newBody);*/
                            res.end(newBody);
                        }

                    });
                }
                if(req.url.startsWith(confAsJsPath) || req.url.startsWith(confPath)) {
                    let isConfByFile = false;
                    if(req.url.startsWith(confAsJsPath)){
                        isConfByFile = true;
                    }
                    let proxyUrl = urlForProxy || config.PROXY_SERVER;
                    let url = proxyUrl+req.url;
                    let base = proxyUrl.replace('http:\/\/','').replace('https:\/\/','');
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
                            'X-From-ExL-API-Gateway' : '1'
                        }
                    };
                    let requestObject = http;
                    if(method === 'https') {
                        requestObject = https;
                    }
                    let req2 = requestObject.request(options, (res1) => {
                            fixConfiguration(res, res1,isConfByFile);
                });

                    req2.on('error', (e) => {
                        _next(req,res,next,viewProxy[viewForProxy],viewForProxy);
                });

                    req2.write('');
                    req2.end();

                }
                else {
                    if(!viewProxy[viewForProxy]){
                        viewProxy[viewForProxy] = urlForProxy;
                    }
                    _next(req,res,next,viewProxy[viewForProxy],viewForProxy);
                }

            }
        ],
        port: 8003,
        baseDir: appName
    });
});

function _next(req,res,next,url,vid){
    console.log('vid=' + vid);
    console.log('url=' + url);
    let path = _url.parse(req.url).pathname;


    let proxyUrl = url || config.PROXY_SERVER;
    let fixedurl = proxyUrl+req.url;
    let base = proxyUrl.replace('http:\/\/','').replace('https:\/\/','');
    let method = proxyUrl.split('://')[0];
    let parts = base.split(':');
    let hostname = parts[0];
    let port = parts[1];

    console.log('this is the current path: ' + path);
    if(path.indexOf('/primo-explore/custom') > -1) {
        console.log('req url=' + _url.parse(req.url));
        let filePath= process.cwd() + path;
        console.log(filePath);
        let filestream= fs.createReadStream(filePath);
        filestream.pipe(res);
        return;
    }

    console.log('fixedurl:'+fixedurl);
    console.log('port:'+port);
    console.log('hostname:'+hostname);
    console.log('req.url :'+req.url);
    let headers= req.headers;
    headers['X-From-ExL-API-Gateway']= '1';
    headers['Accept-Encoding']='';  //cancels server sending gzip which causes a decoding error in the Iframe
    console.log(headers);
    let options = {
        hostname: hostname,
        port: port,
        path: req.url,
        method: req.method,
        headers: headers,
        agent: false
    };
    let requestObject = http;
    if(method === 'https') {
        requestObject = https;
        console.log('method is https');
    }

    let req2 = requestObject.request(options, (res1) => {
        let body = '';
        res1.setEncoding('utf8');

        res1.on("data", function(chunk) {
            body = body + chunk.toString();
        });

        res1.on("end", function(){
            let responseHeaders= res1.headers;
            for (let header in responseHeaders){
                res.setHeader(header, responseHeaders[header]);
            }
            res.statusCode= res1.statusCode;
            res.end(body);
        });
    });
    utils.getRequestBody(req).then((body)=>{ //we need to add the body of the original request to the new request
        req2.write(body, 'utf8');
        req2.end();
    });


}


gulp.task('run', gulp.series('connect:primo_explore','reinstall-primo-node-modules','custom-js','custom-scss','custom-css')); //watch

gulp.task('web', gulp.series('serve')); //watch
