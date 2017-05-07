// Include gulp
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin');

// Minify JavaScript with gulp-uglify
gulp.task('scripts', function() {
	gulp.src(paths.scripts[0])
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
	gulp.src(paths.scripts[1])
		.pipe(uglify())
		.pipe(gulp.dest('dist/views/js'));
});

// Minify CSS with gulp-clean-css
gulp.task('styles', function() {
	gulp.src(paths.styles[0])
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css'));
	gulp.src(paths.styles[1])
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/views/css'));
});

// Minify Html with gulp-htmlmin
gulp.task('content', function() {
    gulp.src(paths.content[0])
        .pipe(htmlmin({collapseWhitespace: true, 
                       minifyCSS: true, 
                       removeComments: true,
                       minifyJS: true
                      }))
        .pipe(gulp.dest('dist'));
    gulp.src(paths.content[1])
		.pipe(htmlmin({collapseWhitespace: true,
                       minifyCSS: true, 
                       removeComments: true,
                       minifyJS: true
                      }))
		.pipe(gulp.dest('dist/views'));
});

// Optimize images with gulp-imagemin
gulp.task('images', function () {

	gulp.src( paths.images[0] )
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({plugins: [{removeViewBox: true}]})
        ],[{verbose: true}]))
		.pipe(gulp.dest('dist/img'));

	 gulp.src( paths.images[1] )
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({plugins: [{removeViewBox: true}]})
        ],[{verbose: true}]))
        .pipe(gulp.dest('dist/img'));

	gulp.src( paths.images[2] )
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({plugins: [{removeViewBox: true}]})
        ],[{verbose: true}]))
		.pipe(gulp.dest('dist/views/images'));

    gulp.src( paths.images[3] )
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({plugins: [{removeViewBox: true}]})
        ],[{verbose: true}]))
        .pipe(gulp.dest('dist/views/images'));
});

// Night gathers, and now my watch begins. It shall not end until my death. - Oath of the Night Watch
gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
});


// Object literal for different paths in my project
// using a technique suggested by John Mav Udacity mentor at
// https://discussions.udacity.com/t/gulp-and-setting-up-a-gulp-workflow-intermediate/24359/33
var paths = {
	content: ['src/*.html', 'src/views/*.html'],
	scripts: ['src/js/*.js', 'src/views/js/*.js'],
	styles: ['src/css/*.css', 'src/views/css/*.css'],
	images: ['src/img/*.png', 'src/img/*.jpg', 'src/views/images/*.png', 'src/views/images/*.jpg']
};

// Building Default Gulp
gulp.task('default', ['content', 'scripts', 'styles', 'images']);