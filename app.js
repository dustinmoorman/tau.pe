'use strict';

var express = require('express'),
    cons = require('consolidate'),
    path = require('path'),
    routes = require('./routes'),
    app = express();

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('*', routes.index);

app.listen(3000);
console.dir('Started tau.pe');