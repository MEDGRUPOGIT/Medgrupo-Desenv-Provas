let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require("gulp-rename");


// Task to minify css using package cleanCSs
gulp.task('minify-css', () => {
    return gulp.src('css/*.css')

        .pipe(cleanCSS())

        .pipe(gulp.dest('css/minificado'));
});

gulp.task('minify-emb-css', () => {
    return gulp.src('embedded-icons/*.css')

        .pipe(cleanCSS())

        .pipe(gulp.dest('css/minificado'));
});
