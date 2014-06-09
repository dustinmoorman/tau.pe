var express = require('express'),
  cons = require('consolidate'),
  path = require('path'),
  app = express();

app.engine('html', cons.swig)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
app.use(express.static(path.join(__dirname, 'assets')))

app.get('/', function(request, response){
  response.render('index', {'title': "Coming Soon"});
});

app.get('*', function(request, response){
  response.render('404', {});
});

app.listen(3000);
console.dir("Started tau.pe");