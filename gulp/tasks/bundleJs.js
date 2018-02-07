/**
 * Created by shoulm on 05/02/2018.
 */
var gulp = require('gulp');
const webpackStream= require('webpack-stream');
const webpack= require('webpack-stream').webpack;
const UglifyJsPlugin= require('uglifyjs-webpack-plugin');
const path= require('path');
const minimist = require('minimist');

gulp.task('bundle-js', function() {
    return bundleJs();
});

function bundleJs(){
    var options = minimist(process.argv.slice(2));
    console.log(options);
    let bundleConfig={
        entry: './primo-explore/www/renderer.js',
        resolve:{
            extensions: ['.js']
        },
        output:{
            filename: 'bundle.js'
        },
        target: 'web',
        devtool: 'source-map'
    };

    if (options.dev){
        console.log('webpack watching!');
        bundleConfig['watch'] = true;
    }

    else{
        bundleConfig['plugins'] = [new UglifyJsPlugin({sourceMap: true})];
    }

    webpackStream(bundleConfig)
        .pipe(gulp.dest('./primo-explore/www/'));
}



