//load gulp
var gulp = require('gulp');

//load other plugins
var del = require('del');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');



gulp.task('styles', function() {
  return gulp.src('src/css/*.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'));
});

//define js scripts
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'));
});

//define clean
gulp.task('clean', function() {
    return del(['dist/css/**', 'dist/js/**']);
});

//Default task
gulp.task('default', gulp.series('clean', 'scripts', 'styles'));
