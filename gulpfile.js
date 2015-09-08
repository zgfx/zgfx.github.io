var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var rename = require("gulp-rename");
//var notify = require("gulp-notify");

function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('sass', function () {
    gulp.src('scss/*.scss')
        .pipe(sass())
        .on('error', swallowError)
	    .pipe(minifycss({keepBreaks:false}))
	    .pipe(rename({suffix: '.min'}))
	    .pipe(gulp.dest('min-css'));
	    //.pipe(notify("Hello Gulp!"));
});


gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['sass']);


});

gulp.task('default', ['sass', 'watch']);



