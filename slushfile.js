var gulp = require('gulp'),
  install = require('gulp-install'),
  conflict = require('gulp-conflict'),
  template = require('gulp-template'),
  inquirer = require('inquirer');

gulp.task('default', function(done) {
  inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'Please name your ShellJS Plugin (do not prefix it with \'shelljs-plugin\'):',
      default: gulp.args.join(' '),
    }, {
      type: 'input',
      name: 'desc',
      message: 'Please describe your shelljs plugin:',
    }, {
      type: 'input',
      name: 'user',
      message: 'What is your github username:',
    }])
    .then(function(answers) {
      gulp.src(__dirname + '/plugin/**', { dot: true })
        .pipe(template(answers, { interpolate: /<%=([\s\S]+?)%>/g }))
        .pipe(conflict('./'))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('end', function() {
          done();
        })
        .resume();
    });
});

