'use strict';

var stylish = require('jshint-stylish');

module.exports = function (gulp, plugin) {
    return function () {
        gulp.src('./app/js/**/*.js')
            .pipe(plugin.jshint())
            .pipe(plugin.jshint.reporter(stylish));
    };
};