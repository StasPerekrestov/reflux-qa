var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var livereload = require('gulp-livereload');
var source = require("vinyl-source-stream");
var minifyCSS = require('gulp-minify-css');
//var clean = require('gulp-clean');
var watch;

//see http://truongtx.me/2014/08/06/using-watchify-with-gulp-for-fast-browserify-build/
//http://mherman.org/blog/2014/08/14/kickstarting-angular-with-gulp/#.VCicCimSxX4

gulp.task('default', function() {
	// place code for your default task here
});


gulp.task('browserify-nowatch', function() {
	watch = false;
	browserifyShare();
});

gulp.task('browserify-watch', function(){
  watch = true;
  browserifyShare();
});

function browserifyShare() {
	var b = browserify({
		cache: {},
		packageCache: {},
		fullPaths: true,
		transform: ['reactify']
	});

	if (watch) {
		// if watch is enable, wrap this bundle inside watchify
		b = watchify(b);
		b.on('update', function() {
			bundleShare(b);
		});
	}

	b.add('./public/js/app.js');
	bundleShare(b);
};

function bundleShare(b) {
	b.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('./public'))
		.pipe(livereload());
}

// define the browserify-watch as dependencies for this task
gulp.task('watch', ['browserify-watch', 'minify-css'], function() {
	// watch other files, for example .less file
	gulp.watch('./less/*.less', ['compile-less']);

	// Start live reload server
	livereload.listen(35729);
});

gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.css'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('copy-bower-components', function() {
	gulp.src('./bower_components/**')
		.pipe(gulp.dest('public/vendor'));
});
