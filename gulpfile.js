var gulp = require('gulp'),
    path = require('path'),
    gulpexpress = require('./lib/gulp-express.js'),
    livereload = require('gulp-livereload');

gulp.task('server', function() {
  gulpexpress.serve({
    script: 'index.js',
    port: 3000
  });
});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch([ 'src/www/**/*' ]).on('change', livereload.changed);
 
  gulp.watch([ 'index.js' ], ['server']);
});

gulp.task( 'dev', [ 'server', 'watch' ] );
