const gulp = require('gulp')
      sass = require('gulp-sass');

gulp.task('styles', () => {
  return gulp.src('css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
  gulp.watch('./css/**/*.scss', ['styles'])
});

gulp.task('default', ['styles']);