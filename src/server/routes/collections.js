var React = require('react');
var express = require('express');
var collections = require('../api').collections;
var Collection = require('../../components/collection');


module.exports = express.Router()
  .get('/:id', function(req, res, next) {
    collections.get(req.params.id)
      .then(function(data) {
        var el = React.createElement(Collection, data);
        res.render('collection', {component: React.renderToString(el)});
      })
      .catch(next);
  });
