var express = require('express');


module.exports = express.Router()
  .get('/', function(req, res) {
    // Redirects to one of the collections for demonstration purposes, but
    // should actually be rendering something else in the actual app.
    res.redirect('/collections/collection1');
  })

  .use('/collections/', require('./collections'));
