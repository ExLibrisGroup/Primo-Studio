'use strict';

let gulp = require('gulp');
let babel = require('gulp-babel');
let config = require('../config.js');
let rename = require("gulp-rename");
let concat = require("gulp-concat");
let debug = require('gulp-debug');
var wrap = require("gulp-wrap");
var glob = require('glob');
let expressExports= require('./express');


let buildParams = config.buildParams;

gulp.task('watch-css', () => {

    gulp.watch([buildParams.customCssMainPath(),buildParams.customNpmCssPath(),'!'+buildParams.customCssPath()],['custom-css']);
});




gulp.task('custom-css', () => {
    return customCss(config.view());
});


function customCss(userId){
    let userCustomDir= expressExports.getUserCustomDir(userId);
    return gulp.src([userCustomDir + '/css/*.css', userCustomDir + '/node_modules/primo-explore*/css/*.css', '!'+ userCustomDir + '/css/' + buildParams.customCssFile])
        .pipe(concat(buildParams.customCssFile))
        .pipe(gulp.dest(expressExports.getUserCustomDir(userId) + '/css'));
}