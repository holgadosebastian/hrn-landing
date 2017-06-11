'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var mainBowerFiles = require('gulp-main-bower-files');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var clean = require('gulp-clean');
var htmlReplace = require('gulp-html-replace');
var sync = require('gulp-sync')(gulp);

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
			baseDir: ['src', '.tmp']
		}
	});
});

gulp.task('main-bower-files', function() {
	return gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./.tmp/scripts'));
});

gulp.task('build-css', function() {
	return gulp.src('./src/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('docs/css'));
});

gulp.task('build-js', function() {
	return gulp.src('./src/scripts/**/*.js')
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('docs/scripts'));
});

gulp.task('copy', function() {
	gulp.src('./src/images/**/*.*')
		.pipe(gulp.dest('docs/images'));
	gulp.src('./.tmp/scripts/**/*.js')
		.pipe(gulp.dest('docs/scripts'));
	gulp.src('./src/*.html')
		.pipe(htmlReplace({
			'vendor': 'scripts/vendor.js',
			'scripts': 'scripts/scripts.js'
		}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('docs'));
});

gulp.task('clean', function() {
	return gulp.src('docs', {read: false})
		.pipe(clean());
});

gulp.task('clean:tmp', function() {
	return gulp.src('.tmp', {read: false})
		.pipe(clean());
});

gulp.task('run', ['sass', 'main-bower-files', 'browserSync'], function() {
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', sync.sync(['clean', 'clean:tmp', 'build-css', 'build-js', 'main-bower-files', 'copy']));
