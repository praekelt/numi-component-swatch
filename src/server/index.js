require('node-jsx').install({extension: '.jsx'});
var express = require('express');
var hbs = require('express-hbs');
var logger = require('morgan');
var join = require('path').join;
var routes = require('./routes');
var api = require('./api');


var app = express();
if (app.get('env') != 'test') app.use(logger('dev'));

var staticDir = join(__dirname, '../../static');
if (app.get('env') != 'prd') app.use('/static', express.static(staticDir));

app
  .engine('hbs', hbs.express4())
  .set('views', join(__dirname, 'views'))
  .set('view engine', 'hbs')
  .use(routes);


module.exports = app;
