var express = require('express'),
  cons = require('consolidate'),
  app = express();

app.engine('html', cons.swig)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.get('/', function(request, response){
  response.render('index', {'title': "Coming Soon"});
});

app.get('*', function(request, response){
  response.render('404', {});
});