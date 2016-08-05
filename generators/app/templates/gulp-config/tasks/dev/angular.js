'use strict';

module.exports = function (gulp, plugin) {

    return function () {
        gulp.src('./app/js/**/*.js')
            .pipe(plugin.ngAnnotate())
            .pipe(plugin.concat('bundle.js'))
            .pipe(gulp.dest('./public/js'));
    };

};