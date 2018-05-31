/**
 * Created by shoulm on 28/02/2018.
 */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sass = require('gulp-sass');
const minimist = require('minimist');
var autoprefixer = require('gulp-autoprefixer');

const src = {
    scss: 'primo-explore/www/scss/main.scss',
    css:  'primo-explore/www/css',
    html: 'primo-explore/www/*.html'
};

const scssFiles = ['primo-explore/www/scss/*.scss', 'primo-explore/www/**/*.scss']

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});


gulp.task('watch-app', function() {
    let options = minimist(process.argv.slice(2));
    if (options.dev) {
        browserSync.init({
            proxy: "localhost:80"
        });
        gulp.watch(scssFiles, ['sass']);
        gulp.watch(src.html).on('change', reload);
    }
});
