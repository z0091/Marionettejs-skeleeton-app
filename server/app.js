'use strict';

var http = require('http');
var express = require('express');
var path = require("path");

//var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');

var app = express();

// all environments
app.set('port', process.env.PORT || 9000);
app.set('views', __dirname + '../app/scripts/views');
app.set('view engine', 'handlebars');
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: 'thtryjuykyWAfrg56n*5rg.6@3rFG**'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../app')));
app.use(express.static(path.join(__dirname, '../.tmp')));

app.get('/', function (req, res) {
	res.sendfile(path.join(__dirname, '../app/index.html'));
});

// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
	app.use(errorHandler());
}

var server = http.createServer(app);
server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});

