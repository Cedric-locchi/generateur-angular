'use strict';

var bs = require('browser-sync');

bs.init({
    server: './',
    ghostMode: {
        clicks: true,
        forms: true,
        scroll: true
    },
    logLevel: 'debug'
});

bs.watch('index.html').on('change', bs.reload);
bs.watch('app/index/templates/home.html').on('change', bs.reload);
bs.watch('app/news/templates/news.html').on('change', bs.reload);
bs.watch('public/css/style.css').on('change', bs.reload);
bs.watch('public/js/bundle.js').on('change',bs.reload);