'use strict';

var express = require('express');

var router = express.Router();
var Models =  require('./model');

router.get('/users', function(req, res) {
    return Models.Users.find(function (err, users) {
        if (!err) {
            return res.send(users);
        } else {
            res.statusCode = 500;
            console.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
});

router.post('/users', function(req, res) {
    var user = new Models.Users({
        name: req.body.name
    });

    user.save(function (err) {
        if (!err) {
            console.info("article created");
            return res.send(user);
        } else {
            console.log(err);
            console.error('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
});

router.delete('/users/:id', function (req, res){
    return Models.Users.findById(req.params.id, function (err, user) {
        if(!user) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return user.remove(function (err) {
            if (!err) {
                console.info("article removed");
                return res.send({ status: 'OK' });
            } else {
                res.statusCode = 500;
                console.error('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });
});

module.exports = router;
