'use strict';

var express = require('express'),
    cons = require('consolidate'),
    path = require('path'),
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    http = require('http'),
		api = require('./routes/api'),
    app = express();

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/public',express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', routes.index);

app.get('/url/:id', api.getUrl);
app.post('/url', api.addUrl);

app.get('/:slug', function(request, response){
  http.get({
    host: 'www.tau.pe',
    path: '/url/' + request.params.slug
  }, function(res){
		var url = "";
		var data = "";

		res.on("data", function(chunk){
			if(chunk.length > 0) data += chunk;
		});

  	res.on("end", function(){	
			console.log("data: " + data);
			if(data != null){
				var json = JSON.parse(data);
				if(json != null){
					return response.redirect(json.url);
				}
			}
			response.render('index', {"title":"taupe"});
		});
  }).end();
});

app.get('*', routes.index);

app.listen(3000);
console.dir('Started tau.pe');
