var loadCSS = require('exports?loadCSS!fg-loadcss');
var canUseReact = require('../../utils/can-use-react');

if (canUseReact()) require.ensure(['./collection'], function(require) {
  loadCSS('/static/css/collection-enhanced.min.css');
  require('./collection')(window._initialState);
});
