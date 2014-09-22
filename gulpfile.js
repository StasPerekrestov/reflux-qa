var gulp = require('gulp');
var browserify = require('gulp-browserify');
var reactify = require('reactify');
var watchify = require('watchify');


gulp.task('default', function() {
  // place code for your default task here
});

// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    //https://gist.github.com/Sigmus/9253068
    var bundler =  browserify({
          insertGlobals : true,
          debug : !gulp.env.production,
          transform: ['reactify']
        });
    gulp.src('public/js/app.js')
        .pipe(bundler)
        .pipe(gulp.dest('./public/'))
});