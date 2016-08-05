'use strict';

module.exports = function (gulp, plugin)
{
    return function () {
        gulp.src('./app/scss/style.scss')
            .pipe(plugin.plumber())
            .pipe(plugin.sass())
            .pipe(plugin.rename('style.css'))
            .pipe(gulp.dest('public/css/'));
    };
};