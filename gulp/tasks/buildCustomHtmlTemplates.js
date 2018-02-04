'use strict';
const gulp = require('gulp');
const wrap = require("gulp-wrap");
const templateCache = require('gulp-angular-templatecache');
const config = require('../config.js');
const fs = require('fs');
const utils= require('./utils/utils');

let buildParams = config.buildParams;

function parseModuleName(userId){
    let userCustomDir= utils.getUserCustomDir(userId);
    let mainJsContent= fs.readFileSync((userId? userCustomDir + '/js' : buildParams.viewJsDir()) + '/main.js', 'utf8');
    let moduleString= "angular.module('";
    let index= mainJsContent.indexOf(moduleString) + moduleString.length;
    mainJsContent= mainJsContent.slice(index);
    index= mainJsContent.indexOf("'");
    let module= mainJsContent.slice(0, index);
    return module;
}


function prepareTempltesWithBrowserify(userId){
    let userCustomDir= utils.getUserCustomDir(userId);
    let module = parseModuleName(userId);
    return gulp.src((userId? userCustomDir + '/html' : buildParams.viewHtmlDir()) + '/templates/**/*.html')
        .pipe(templateCache({filename:'customTemplates.js', module: module}))
        .pipe(gulp.dest((userId? userCustomDir + '/js' : buildParams.viewJsDir())));
}

function prepareTemplates(userId) {
    return new Promise((resolve, reject)=>{
        let userCustomDir= utils.getUserCustomDir(userId);
        if(config.getBrowserify()){
            let stream= prepareTempltesWithBrowserify(userId);
            stream.on('end', resolve);
            stream.on( 'error', reject);
        }
        else{
            let stream= gulp.src((userId? userCustomDir + '/html' : buildParams.viewHtmlDir()) + '/templates/**/*.html')
                .pipe(templateCache({filename:'customTemplates.js', templateHeader: 'app.run(function($templateCache) {', templateFooter: '});'}))
                .pipe(gulp.dest((userId? userCustomDir + '/js' : buildParams.viewJsDir())));
            stream.on('end', resolve);
            stream.on( 'error', reject);
        }
    });

}

gulp.task('custom-html-templates', () => {
    return customHtmlTemplates();
})

function customHtmlTemplates(userId){
    return prepareTemplates(userId);
}

module.exports={
    customHtmlTemplates: customHtmlTemplates
}
