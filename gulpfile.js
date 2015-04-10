var gulp = require('gulp');
var connect = require('gulp-connect');

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