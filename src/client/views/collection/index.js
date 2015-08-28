var loadCSS = require('exports?loadCSS!fg-loadcss');
var canUseReact = require('../../utils/can-use-react');

if (canUseReact()) {
  loadCSS('/static/css/enhanced.min.css');

  require.ensure(['./collection'], function(require) {
    require('./collection')(window._initialState);
  });
}
