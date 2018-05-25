var gulp = require('gulp');
var server = require('gulp-webserver');
var sq = require('gulp-sequence');
var url = require('url');
var mock = require('./src/mock/mock.js');
gulp.task('ser', function() {
    return gulp.src('src').pipe(server({
        host: "localhost",
        port: 9090,
        middleware: function(req, res, next) {
            var Url = url.parse(req.url, true).pathname;
            if (/\/book/g.test(Url)) {
                res.end(JSON.stringify(mock(req.url)));
            }

            next();
        }

    }));

});
gulp.task('default', function(cb) {
    sq('ser', cb);
})