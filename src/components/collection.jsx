var React = require('react');


var Collection = React.createClass({
  render: function() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
});


module.exports = Collection;
