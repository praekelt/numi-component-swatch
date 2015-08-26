var React = require('react');
var Collection = require('../../../components/collection.jsx');


module.exports = function(initialState) {
  var el = React.createElement(Collection, {initialState: initialState});
  React.render(el, document.getElementById('mountpoint'));
};
