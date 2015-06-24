var gulp = require('gulp'),
    sass = require('gulp-sass')
    concat = require('gulp-concat');



gulp.task('styles', function() {
  return gulp.src('css/*.sass')
    .pipe(sass({
      'sourcemap=none': true,
      includePaths: require('node-bourbon').includePaths
    }))
    .pipe(concat('stylesheet.css'))
    .pipe(gulp.dest('css/'))
});

gulp.task('watch', function() {
    gulp.watch('css/*.sass', ['styles']);
});

gulp.task('default', ['styles', 'watch']);