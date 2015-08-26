var React = require('react');


var Collection = React.createClass({
  getInitialState: function() {
    return this.props.initialState;
  },

  render: function() {
    return (
      <h1>{this.state.name}</h1>
    );
  }
});


module.exports = Collection;
