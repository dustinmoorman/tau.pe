'use strict';

var express = require('express'),
    cons = require('consolidate'),
    path = require('path'),
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    http = require('http'),
    api = require('./routes/api'),
    morgan = require('morgan'),
    app = express();

app.engine('html', cons.swig);
app.use(morgan('short'))
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/public',express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', routes.index);

app.get('/url/:id', api.getUrl);
app.post('/url', api.addUrl);
app.get('/:slug', routes.handleSlug);
app.get('*', routes.index);

app.listen(3000);
console.dir('Started tau.pe');
