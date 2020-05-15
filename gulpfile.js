'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require ('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();


gulp.task('sass', function() {
	return gulp
		.src('scss/**/*.scss')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sassGlob())
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: ['bower_components']
		}))
		.pipe(autoprefixer({browsersList: ['defaults']}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('httpdocs/css/'))
		.pipe(browserSync.stream())
});

gulp.task('serve', gulp.series('sass', function() {
	browserSync.init({
		server: "./httpdocs"
	});

	gulp.watch('scss/**/*.scss', gulp.series('sass'));
	gulp.watch('scss/*.scss', gulp.series('sass'));
	gulp.watch('httpdocs/**/*').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));
