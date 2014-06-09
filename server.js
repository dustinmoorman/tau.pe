var express = require('express'),
  cons = require('consolidate'),
  app = express();

app.engine('html', cons.swig)

app.get('/', function(request, response){
  response.render('index', {'title': "Coming Soon"});
});