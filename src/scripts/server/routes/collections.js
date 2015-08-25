var express = require('express');
var collections = require('../api').collections;


module.exports = express.Router()
  .get('/:id', function(req, res, next) {
    collections.get(req.params.id)
      .then(function() {
        // TODO
        res.send('Hi');
        next();
      });
  });
