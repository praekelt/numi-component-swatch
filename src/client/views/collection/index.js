var canUseReact = require('../../utils/can-use-react');

if (canUseReact()) require.ensure(['./collection'], function(require) {
  require('./collection')(window._initialState);
});
