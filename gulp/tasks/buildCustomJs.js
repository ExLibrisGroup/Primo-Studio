'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const config = require('../config.js');
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const debug = require('gulp-debug');
const wrap = require("gulp-wrap");
const glob = require('glob');
const gutil = require('gulp-util');
const fs = require("fs");
const browserify = require("browserify");
const template = require('gulp-template');
const del = require('del');
const utils= require('./utils/utils');
const buildCustomHtmlTemplatesExports= require('./buildCustomHtmlTemplates');
const hookJSTemplateFile= 'gulp/tasks/utils/custom.js.tmpl';

// const componentRegex= /app\.component[\s\S]*?\(\s*['"](\w*?)['"][\s\S]*?template:[\s\S]*?([`'"])([\s\S]*?)\2[\s\S]*?\);/g

let buildParams = config.buildParams;

gulp.task('watch-js', () => {
    gulp.watch([`${buildParams.viewJsDir()}/**/*.js`,'!'+buildParams.customPath()],['custom-js']);
});


gulp.task('custom-js', ['custom-html-templates'],() => {
    customJsRun();
});

function customJs(userId){
    return utils.promiseSerial([buildCustomHtmlTemplatesExports.customHtmlTemplates, customJsRun], userId);
}

function customJsRun(userId){
    if(config.getBrowserify()) {
        return buildByBrowserify(userId);
    }
    else {
        return buildByConcatination(userId);
    }
}



function buildByConcatination(userId) {
    return new Promise((resolve, reject)=>{
        let userCustomDir= utils.getUserCustomDir(userId);
        let stream= gulp.src([
            (userId? userCustomDir + '/js/' + buildParams.customModuleFile : buildParams.customModulePath()),
            (userId? userCustomDir + '/js/*.js' : buildParams.mainPath()),
            (userId? userCustomDir + '/node_modules/primo-explore*/js/*.js' : buildParams.customNpmJsPath()),
            (userId? '!' + userCustomDir + '/js/' + buildParams.customFile : '!'+buildParams.customPath()),
            (userId? '!' + userCustomDir + '/node_modules/primo-explore*/js/custom.module.js' : '!'+buildParams.customNpmJsModulePath()),
            (userId? '!' + userCustomDir + '/node_modules/primo-explore*/js/custom.js' : '!'+buildParams.customNpmJsCustomPath())
        ])
            .pipe(concat(buildParams.customFile))
            .pipe(babel({
                presets: ['es2015']
            }))
            .on("error", function(err) {
                if (err && err.codeFrame) {
                    gutil.log(
                        gutil.colors.red("Browserify error: "),
                        gutil.colors.cyan(err.filename) + ` [${err.loc.line},${err.loc.column}]`,
                        "\r\n" + err.message + "\r\n" + err.codeFrame);
                }
                else {
                    gutil.log(err);
                }
                this.emit("end");
            })
            .pipe(wrap('(function(){\n"use strict";\n<%= contents %>\n})();'))
            .pipe(gulp.dest((userId? userCustomDir + '/js' : buildParams.viewJsDir())));
        stream.on('end', resolve);
        stream.on( 'error', reject);
    });

}

function buildByBrowserify(userId) {
    return new Promise((resolve, reject)=>{
        let userCustomDir= utils.getUserCustomDir(userId);
        let stream= browserify({
            debug: true,
            entries: (userId? userCustomDir + '/js/main.js': buildParams.mainJsPath()),
            paths:[
                (userId? userCustomDir + '/js/node_modules' :buildParams.viewJsDir()+'/node_modules')
            ]
        })
            .transform("babelify",{presets: ["es2015"], plugins: ["transform-html-import-to-string"]})
            .bundle()
            .pipe(fs.createWriteStream((userId? userCustomDir + '/js/' + buildParams.customFile : buildParams.customPath())));
        stream.on('end', resolve);
        stream.on( 'error', reject);
    });

}

function buildCustomHookJsFile(customDir, hookName, hookFeatureList){
    if (hookFeatureList.length === 0){ //if no more features left on the hook we can delete the hook js file
        return del([customDir + '/js/' + hookName + '.js'])
    }
    let hookTemplate = '';
    for (let npmId of hookFeatureList){
        hookTemplate = hookTemplate + `<${npmId} parent-ctrl="$ctrl.parentCtrl"></${npmId}>`
    }
    let formatedHookName= getFormattedHookName(hookName);
    let templateParameters= {
        hookName: formatedHookName,
        hookTemplate: hookTemplate
    };
    return new Promise((resolve, reject)=>{
        let stream= gulp.src(hookJSTemplateFile)
            .pipe(template(templateParameters))
            .pipe(rename(hookName + '.js'))
            .pipe(gulp.dest(customDir + '/js/'));
        stream.on('end', resolve);
        stream.on( 'error', reject);
    });
}

function getFormattedHookName(hookName){
    let arr= hookName.split('-');
    arr.shift();
    return arr.reduce((cur, value)=>{
        return cur + (value.charAt(0).toUpperCase() + value.slice(1));
    }, '');
}



module.exports={
    customJs: customJs,
    buildCustomHookJsFile: buildCustomHookJsFile
}
