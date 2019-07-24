var gulp = require('gulp');
var gls = require('gulp-live-server');
const browserify = require("browserify");
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const storage = require('node-persist');
const api = require('./expressApi');
const http = require('http');


gulp.task('serve', function() {
    //1. serve with default settings
    /* var server = gls.static(); //equals to gls.static('public', 3000);
     server.start();*/

    //2. serve at custom port

    storage.initSync({
        dir: 'userManifestStorage/'
    });

    if (gulp.task("runAppStore")) {
        gulp.series('runAppStore')
    }

    //var server = gls.static(['primo-explore/www','primo-explore/api'], 8888);
    const express = require('express');
    const appS = express();
    appS.use( bodyParser.json({limit: '10mb'}) );
    appS.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));
    appS.use(express.static('primo-explore/dist/primo-explore'));
    appS.use(cookieParser());

    appS.use('', api);

    let server = http.createServer(appS);

    server.listen(8004, function () {
        console.log('Example app listening on port 8004!')
    });
    /*server.start();*/
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
