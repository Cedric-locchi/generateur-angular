'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {

    // Have Yeoman greet the user.
    this.log(yosay(
      'générateur maintenu par ' + chalk.red('adigit')
    ));

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'nom du projet',
        default: 'projet'
      },
      {
        type: 'input',
        name: 'version',
        message: 'version du projet',
        default: '0.0.1'
      },
      {
        type: 'input',
        name: 'description',
        message: 'description du projet',
        default: ''
      },
      {
        type: 'input',
        name: 'auteur',
        message:'auteur du projet',
        default: ''
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));

  },

  writing: {

    packageJson: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {

          name: this.props.name,
          version: this.props.version,
          description: this.props.description,
          auteur: this.props.auteur
        }

      )
    },

    app: function () {
      this.fs.copy(
        this.templatePath('app/**/**/*'),
        this.destinationPath('app/')
      )
    },

    conf: function () {
      this.fs.copy(
        this.templatePath('conf/*.js'),
        this.destinationPath('conf/')
      )
    },

    gulpConfiguration: function () {
      this.fs.copy(
        this.templatePath('gulp-config/**/*.js'),
        this.destinationPath('gulp-config/')
      )
    },

    public: function () {
      this.fs.copy(
        this.templatePath('public/**/*'),
        this.destinationPath('public/')
      )
    },

    gitConf: function () {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      )
    },

    gulpFile: function () {
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      )
    },

    jsConfig: function () {
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      )
    },

    indexCopy: function () {
      this.fs.copy(
        this.templatePath('index.html'),
        this.destinationPath('index.html')
      )
    }

  },

  install: function () {
    this.installDependencies({
      bower: false,
      npm: true,
      callback: function () {
        console.log(chalk.red('installation des dependances terminé'));
      }
    });
  }
});
