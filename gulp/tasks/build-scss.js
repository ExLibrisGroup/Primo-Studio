'use strict';

let autoprefixer = require('gulp-autoprefixer');
let config= require('../config');
let buildParams = config.buildParams;
let useScss = require('../config').getUseScss;
let proxy_server = require('../config').PROXY_SERVER
let gulp = require('gulp');
let cssnano = require('gulp-cssnano');
let debug = require('gulp-debug');
let rename = require("gulp-rename");
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let plumber = require('gulp-plumber');
let splitCss = require('../cssSplitter');
let merge = require('merge-stream');
let clone = require('gulp-clone');
let template = require('gulp-template');
let request = require('request');
let  zlib = require('zlib');
let tar = require('tar-fs');
let stylesBaseDir = 'www/styles/partials';
let templateFile = stylesBaseDir+'/_variables.tmpl.scss';
let OTBColorsFile = stylesBaseDir+'/../colors.json.txt';
let scssFile = '_variables.scss';
var runSequence = require('run-sequence');
let  fs = require('fs');
let del = require('del');
let lodashMerge = require('lodash/merge');
let gutil = require('gulp-util');
let utils= require('./utils/utils');
let customCss=  require('./buildCustomCss').customCss;
// let config= require('../config');

var Readable = require('stream').Readable;

gulp.task('cleanup',()=> del(['www']));

gulp.task('extract-scss-files', ()=> {
    return extractScssFiles();
});

function extractScssFiles(userId){
    let proxy_server = config.PROXY_SERVER;
    console.log(proxy_server+'/primo-explore/lib/scsss.tar.gz');
    let url = proxy_server+'/primo-explore/lib/scsss.tar.gz';
    var headers = {
		/*'Accept-Encoding': 'gzip'*/
    };
    let userCustomDir=userId? utils.getUserCustomDir(userId) : '.';
    return new Promise((resolve, reject)=>{
        let stream= request({url:url, 'headers': headers})
            .pipe(zlib.createGunzip()) // unzip
            .pipe(tar.extract(userCustomDir, {map: (header)=>{
                if (header.name.indexOf('colors.json') > -1){
                    header.name = header.name.replace('colors.json', 'colors.json.txt');
                }
                return header;
            }}));
            stream.on('finish', resolve);
            stream.on( 'error', reject);
    });
}


gulp.task('color-variables',() => {
    return colorVariables();
});

function colorVariables(userId){
    let userCustomDir=userId? utils.getUserCustomDir(userId): utils.getUserCustomDir(config.view());
    let colorVariables = JSON.parse(fs.readFileSync(userCustomDir + '/css' + '/../colors.json.txt', 'utf8'));
    let colorVariablesOTB =JSON.parse(fs.readFileSync((userId? userCustomDir + '/' : '') + OTBColorsFile, 'utf8'));
    let colorsMeregd = lodashMerge(colorVariablesOTB, colorVariables);
    return new Promise((resolve, reject)=>{
        let stream= gulp.src((userId? userCustomDir + '/' : '') + templateFile)
            .pipe(template(colorsMeregd))
            .pipe(rename(scssFile))
            .pipe(gulp.dest((userId? userCustomDir + '/' : '') + stylesBaseDir));
        stream.on('end', resolve);
        stream.on( 'error', reject);
    });
}

gulp.task('compile-scss',() => {
    return compileScss();
});

function compileScss(userId) {
    let userCustomDir=userId? utils.getUserCustomDir(userId): utils.getUserCustomDir(config.view());
    return new Promise((resolve, reject)=>{
        let allCss  = gulp.src((userId? userCustomDir + '/' : '') + 'www/styles/main.scss')
            .pipe(plumber({
                errorHandler: function (err) {
                    console.log('Error:' + err);
                    this.emit('end');
                }
            }))
            // .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }));
        let colorStream = allCss
            .pipe(clone())
            .pipe(rename('app-colors.css'))
            //.pipe(cssnano({safe: true}))
            .pipe(splitCss({colors:true}))
            //.pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(userCustomDir + '/css'));

        colorStream.on('end', resolve);
        colorStream.on( 'error', reject);
    });
}

gulp.task('app-css', (cb) => {
	runSequence('extract-scss-files', 'color-variables', 'compile-scss', 'custom-css', 'cleanup', cb);
});


function appCss(userId){
    return utils.promiseSerial([extractScssFiles, colorVariables, compileScss, customCss], userId);
}


/**
 * Task to watch custom scss files contained in /scss directory in view package folder
 *
 * Please note. The logic of this task will only execute if the run task is
 * executed with the "useScss" parameter, e.g.: gulp run --view UNIBZ --useScss
 */
gulp.task("watch-custom-scss", () => {
	if (!useScss()) {
		return;
	}

	gulp.watch([buildParams.customScssDir() + "/**/*.scss"], ["custom-scss"]);
});

/**
 * Compiles the custom scss to a css file called custom-scss-compiled.css which
 * in turn is then concatenated with all other css files present in the /css folder
 * of the view package folder to the custom1.css file that constitutes the entirety
 * of the view package css.
 *
 * Please note. The logic of this task will only execute if the run task is
 * executed with the "useScss" parameter, e.g.: gulp run --view UNIBZ --useScss
 */
gulp.task("custom-scss", () => {
	if (!useScss()) {
		return;
	}

	gutil.log("Start Creating custom CSS from custom SCSS");

	let customScss = gulp.src(buildParams.customScssMainPath())
		.pipe(plumber({
				errorHandler: function (err) {
						console.log('1111111' + err);
						this.emit('end');
				}
		}))
		// .pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
		}))
		.pipe(rename("custom-scss-compiled.css"))
		.pipe(gulp.dest(buildParams.viewCssDir()));

	gutil.log("End Creating custom CSS from custom SCSS");

	return customScss;
});

module.exports={
    appCss: appCss,
}
