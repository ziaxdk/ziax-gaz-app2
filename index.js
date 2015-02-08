var express = require('express')
	browserify_express = require('browserify-express'),
	app = express()
 
var bundle = browserify_express({
    entry: __dirname + '/src/www/js6/The-Gaz-App.js',
    watch: __dirname + '/src/www/js6/The-Gaz-App.js',
    mount: '/js/the-gaz-app.js',
    verbose: true,
    minify: false,
    bundle_opts: { debug: true } // enable inline sourcemap on js files  
    //write_file: __dirname + '/public/js/myapp.js',
    //ignore: ['optional.js'] // optional array of files to ignore 
});


app.use(bundle);
app.use(express.static('./src/www'));

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
});
