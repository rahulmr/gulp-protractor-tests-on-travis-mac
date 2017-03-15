'use strict';
var gulp = require('gulp');

// The protractor task
var protractor = require('gulp-protractor').protractor;

// Start a standalone server
var webdriver_standalone = require('gulp-protractor').webdriver_standalone;

// Download and update the selenium driver
var webdriver_update = require('gulp-protractor').webdriver_update_specific;

// Downloads the selenium webdriver - stupid solution to pass extra args like ignore_ssl
gulp.task('webdriver_update', webdriver_update({
	webdriverManagerArgs: ['--ignore_ssl']
}));

// Start the standalone selenium server
// NOTE: This is not needed if you reference the
// seleniumServerJar in your protractor.conf.js
gulp.task('webdriver_standalone', webdriver_standalone);


// Setting up the test task
gulp.task('e2e', ['webdriver_update'], function(cb) {
	gulp.src(['example_spec.js']).pipe(protractor({
		configFile: 'protractor.conf.js'
	})).on('error', function(e) {
		console.log(e);
	}).on('end', cb);
});
