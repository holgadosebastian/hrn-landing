'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var mainBowerFiles = require('gulp-main-bower-files');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('main-bower-files', function() {
    var filterJS = gulpFilter('**/*.js', { restore: true });
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles({
            overrides: {
                bootstrap: {
                    main: [
                        './dist/js/bootstrap.js',
                        './dist/css/*.min.*',
                        './dist/fonts/*.*'
                    ]
                }
            }
        }))
        .pipe(filterJS)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(filterJS.restore)
        .pipe(gulp.dest('./wwwroot/libs'));
});


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

gulp.task('main-bower-files', function() {
	return gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/scripts'));
});

gulp.task('run', ['browserSync', 'sass', 'main-bower-files'], function() {
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', function() {
	// TODO: create build task
});
