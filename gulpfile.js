var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var jsmin = require('gulp-jsmin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('watcher', function () {
    gulp.watch('./app/style.scss', gulp.parallel('sass'));
});

sass.compiler = require('node-sass');
gulp.task('sass', function () {
    return gulp.src('./app/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('lib', function () {
    return gulp.src('node_modules/angular/angular.min.js')
        .pipe(concat('angular.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', gulp.parallel('sass', 'lib'));