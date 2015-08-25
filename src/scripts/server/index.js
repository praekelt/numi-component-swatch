var express = require('express');
var logger = require('morgan');
var routes = require('./routes');
var api = require('./api');


var app = express();
if (app.get('env') != 'test') app.use(logger('dev'));
app.use(routes);

module.exports = app;
