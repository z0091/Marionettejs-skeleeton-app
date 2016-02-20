'use strict';

var mongoose    = require('mongoose');
var Schema = mongoose.Schema;

// Schemas
var Test = new Schema({
    name: String
});

module.exports.TestModel = mongoose.model('Test', Test);
