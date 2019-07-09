// Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Funçao para compilar o SASS e adicionar os prefixos
function compilaSass() {
  return gulp
  .src('css/scss/*.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('dist/css'))
  .pipe(sass())
  .pipe(gulp.dest('css/'))
}

// Tarefa de gulp para a função de SASS
gulp.task('sass', compilaSass);


// Função de watch do Gulp
function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
}

// Inicia a tarefa de watch
gulp.task('watch', watch);
