/**
 * Created by shoulm on 05/02/2018.
 */
var gulp = require('gulp');
const webpackStream= require('webpack-stream');
const webpack= require('webpack-stream').webpack;
const UglifyJsPlugin= require('uglifyjs-webpack-plugin');
const path= require('path');

gulp.task('bundle-js', function() {
    return bundleJs();
});

function bundleJs(){
    let bundleConfig={
        entry: './primo-explore/www/renderer.js',
        resolve:{
            extensions: ['.js']
        },
        output:{
            filename: 'bundle.js'
        },
        target: 'web',
        devtool: 'source-map',
        plugins: [new UglifyJsPlugin({sourceMap: true})]
    };

    return webpackStream(bundleConfig)
        .pipe(gulp.dest('./primo-explore/www/'));
}



