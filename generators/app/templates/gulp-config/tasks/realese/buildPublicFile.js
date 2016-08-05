'use strict';

var merge = require('merge-stream');

module.exports = function (gulp, plugin) {

    return function () {
        var img = gulp.src(['./public/img/*', './public/icons/*'])
            .pipe(plugin.imagemin())
            .pipe(gulp.dest('./public/img'));

        var js = gulp.src('./public/js/*.js')
            .pipe(plugin.concat('bundle.js'))
            .pipe(plugin.uglify())
            .pipe(gulp.dest('./public/js/'));

        var css = gulp.src('./public/css/*.css')
            .pipe(plugin.autoprefixer('last 2 versions'))
            .pipe(plugin.csso())
            .pipe(gulp.dest('./public/css'));

        var vendors = gulp.src('./index.html')
            .pipe(plugin.useref())
            .pipe(gulp.dest('./'));

        var critical = gulp.src('./public/css/style.css')
            .pipe(plugin.criticalCss({base: './', inline: true, css: 'public/styles/style.css'}))
            .pipe(gulp.dest('./public/css/'));

        return merge(img, js, css, vendors, critical);
    };

};