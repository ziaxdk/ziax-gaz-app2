var gulp = require('gulp'),
    path = require('path'),
    gulpexpress = require('./lib/gulp-express.js'),
    livereload = require('gulp-livereload'),
    to5 = require("gulp-6to5");

gulp.task('server', function() {
  gulpexpress.serve({
    script: 'index.js',
    port: 3000
  });
});

gulp.task("6to5", function () {
  return gulp.src("./src/www/es6/**/*")
    .pipe(to5())
    .pipe(gulp.dest("./src/www/js6"));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch([ 'src/www/**/*' ]).on('change', livereload.changed);
  gulp.watch([ './src/www/es6/**/*' ], [ '6to5' ]);
  gulp.watch([ 'index.js' ], ['server']);
});

gulp.task( 'dev', [ 'server', '6to5', 'watch' ] );



