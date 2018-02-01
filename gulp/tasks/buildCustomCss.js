'use strict';

let gulp = require('gulp');
let babel = require('gulp-babel');
let config = require('../config.js');
let rename = require("gulp-rename");
let concat = require("gulp-concat");
var wrap = require("gulp-wrap");
var glob = require('glob');
let utils= require('./utils/utils');


let buildParams = config.buildParams;

gulp.task('watch-css', () => {

    gulp.watch([buildParams.customCssMainPath(),buildParams.customNpmCssPath(),'!'+buildParams.customCssPath()],['custom-css']);
});




gulp.task('custom-css', () => {
    return customCss();
});


function customCss(userId){
    let userCustomDir=userId? utils.getUserCustomDir(userId): utils.getUserCustomDir(config.view());
    return new Promise((resolve, reject)=>{
        let stream= gulp.src([userCustomDir + '/css/*.css', userCustomDir + '/node_modules/primo-explore*/css/*.css', '!'+ userCustomDir + '/css/' + buildParams.customCssFile])
            .pipe(concat(buildParams.customCssFile))
            .pipe(gulp.dest(userCustomDir + '/css'));
        stream.on('end', resolve);
        stream.on('error', reject);
    });
}

module.exports={
    customCss: customCss
};