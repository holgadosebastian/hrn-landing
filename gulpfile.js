'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src('./src/scss/**/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	});
});


gulp.task('run', ['browserSync', 'sass'], function() {
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', function() {
	// TODO: create build task
});
