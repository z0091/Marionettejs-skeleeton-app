'use strict';

var express = require('express');
var baucis = require('baucis');

var router = express.Router();
var model =  require('./model');

//router.use('/', function(req, res) {
//    res.json({ message: 'hooray! welcome to our api!' });
//});

router.use('/test', function(req, res) {
    res.json({ name: 'Alexandr!' });
});
//baucis.rest('Test');

var mongoose    = require('mongoose');

var User = new mongoose.Schema({ name: String });
// Register new models with mongoose.
mongoose.model('user', User);
// Create a simple controller.  By default these HTTP methods
// are activated: HEAD, GET, POST, PUT, DELETE
baucis.rest('user');

router.use('/', baucis());

module.exports = router;
