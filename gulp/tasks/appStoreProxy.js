/**
 * Created by shoulm on 14/02/2018.
 */
const gulp = require('gulp');
const httpProxy= require('http-proxy');
const http = require('http');
const utils = require('./utils/utils');
const primoProxy = require('../primoProxy');
const config = require('../config');
const _url = require("url");
const fs= require('fs');

let proxy = httpProxy.createProxyServer({});

gulp.task('startAppStoreProxy', function() {
    let appName = 'primo-explore';
    var server = http.createServer((req, res) => {
        let cookies = utils.parseCookies(req);
        let urlForProxy = cookies['urlForProxy'];
        let viewForProxy = cookies['viewForProxy'];
        let confPath = config.getVe() ? '/primaws/rest/pub/configuration' : '/primo_library/libweb/webservices/rest/v1/configuration';
        let confAsJsPath = '/primo-explore/config_';

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

                    /*console.log('newBody: ' +newBody);*/
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
            _next(req, res, urlForProxy, viewForProxy);
        }

    });
    server.listen(8003);
});


function _next(req,res,targetUrl,vid){


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
    if(path.indexOf('/primo-explore/custom') > -1) {
        console.log('req url=' + _url.parse(req.url));
        let filePath= process.cwd() + path;
        console.log(filePath);
        let filestream= fs.createReadStream(filePath);
        filestream.pipe(res);
        return;
    }

    proxy.web(req, res, { target: targetUrl });
}

gulp.task('runAppStore', ['reinstall-primo-node-modules','custom-js','custom-scss','custom-css']); //watch

gulp.task('web', ['serve']); //watch