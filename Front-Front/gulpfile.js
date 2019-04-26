// Load plugins
let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var del = require('del');

// Script+Styles
gulp.task('useref', function () {
    return gulp.src('./*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

// Imagens
gulp.task('images', function () {
    return gulp.src('./images/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

// Fontes
gulp.task('fonts', function () {
    return gulp.src('./fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})

// Clean
gulp.task('clean:dist', function () {
    return del.sync('dist');
})

// Build
gulp.task('default', function (callback) {
    runSequence('clean:dist',
        ['useref', 'images', 'fonts'],
        callback
    )
})