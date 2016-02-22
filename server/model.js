'use strict';

var mongoose    = require('mongoose');
var Schema = mongoose.Schema;

// Schemas
var Users = new Schema({
    name: String
});

module.exports.Users = mongoose.model('Users', Users);
