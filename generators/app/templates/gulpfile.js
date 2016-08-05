'use strict';

var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();

var sequence = require('run-sequence');

function getDevTask(task) {
    return require('./gulp-config/tasks/dev/' + task)(gulp, plugin);
}

function getRealeseTask(task) {
    return require('./gulp-config/tasks/realese/' + task)(gulp, plugin);
}

// tache de developpement
gulp.task('sass', getDevTask('sass'));
gulp.task('jshint', getDevTask('jshint'));
gulp.task('angular', getDevTask('angular'));

// tache de build et de realese
gulp.task('build', getRealeseTask('buildPublicFile'));

// watcher
gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./app/**/*.js', ['angular', 'jshint']);
});

// tache par default: celle a utiliser pour le dev
gulp.task('default', function (callback) {
    sequence('watch', callback);
});
