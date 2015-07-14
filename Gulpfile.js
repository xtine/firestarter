var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths,
    // minifycss = require('gulp-minify-css'),
    // rename = require('gulp-rename'),
    watch = require('gulp-watch');

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass({
          includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest('css'))
        // .pipe(rename({suffix: '.min'}))
        // .pipe(minifycss())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
