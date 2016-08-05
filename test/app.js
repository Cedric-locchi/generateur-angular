'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-angular-adigit:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('package.json', function () {
    assert.file([
      'package.json'
    ]);
  });

  it('.gitignore', function () {
    assert.file([
      '.gitignore'
    ]);
  });

  it('jshintrc', function () {
    assert.file([
      '.jshintrc'
    ]);
  });

  it('gulpfile', function () {
    assert.file([
      'gulpfile.js'
    ]);
  });

  it('index', function () {
    assert.file([
      'index.html'
    ]);
  });

  it('app index ', function () {
    assert.file([
      'app/js/index/controllers/indexController.js',
      'app/js/index/services/indexService.js',
      'app/js/index/templates/index.html',
      'app/js/index/module.js'
    ])
  });

  it('app news ', function () {
    assert.file([
      'app/js/news/controllers/newsController.js',
      'app/js/news/services/newsService.js',
      'app/js/news/templates/news.html',
      'app/js/index/module.js'
    ])
  });

  it('app', function () {
    assert.file([
      'app/js/app.js'
    ])
  });

  it('app scss ', function () {
    assert.file([
      'app/scss/base/_normalize.scss',
      'app/scss/style.scss'
    ])
  });

  it('conf browser-sync', function () {
    assert.file([
      'conf/browser-sync.js',
      'conf/bs-config.js'
    ])
  });

  it('onf gulp', function () {
    assert.file([
      'gulp-config/tasks/dev/angular.js',
      'gulp-config/tasks/dev/jshint.js',
      'gulp-config/tasks/dev/sass.js',
      'gulp-config/tasks/realese/buildPublicFile.js'
    ])
  });

  it('test public file', function () {
    assert.file([
      'public/css/style.css',
      'public/js/bundle.js'
    ]);
  });

  it('package.json props', function () {
    assert.fileContent('package.json', 'name');
    assert.fileContent('package.json', 'description');
    assert.fileContent('package.json', 'version');
    assert.fileContent('package.json', 'author');
  })
});
