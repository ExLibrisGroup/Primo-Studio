/**
 * Created by shoulm on 28/02/2018.
 */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sass = require('gulp-sass');
const minimist = require('minimist');


const src = {
    scss: 'primo-explore/www/scss/*.scss',
    css:  'primo-explore/www/css',
    html: 'primo-explore/www/*.html'
};

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});


gulp.task('watch-app', function() {
    let options = minimist(process.argv.slice(2));
    if (options.dev) {
        browserSync.init({
            proxy: "localhost:8004"
        });
        gulp.watch(src.scss, ['sass']);
        gulp.watch(src.html).on('change', reload);
    }
});