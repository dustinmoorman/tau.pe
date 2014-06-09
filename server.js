var express = require('express'),
  app = express();

app.get('/', function(request, response){
  response.render('index', {'title': "Coming Soon"});
});