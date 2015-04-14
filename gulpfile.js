var gulp = require('gulp');
var connect = require('gulp-connect');
var jscs = require('gulp-jscs');

gulp.task('reload', function () {
    return gulp.src('./content')
        .pipe(connect.reload());
});

gulp.task('web-server', function () {
    return connect.server({
        root: 'content',
        livereload: true
    });
});

gulp.task('watch', ['web-server'], function () {
    gulp.watch('./content/**/*', ['reload']);
});

gulp.task('default', function () {
    return gulp.src('./content/nav.js')
        .pipe(jscs());
});