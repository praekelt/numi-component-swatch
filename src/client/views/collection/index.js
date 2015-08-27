var loadCSS = require('exports?loadCSS!fg-loadcss');
var multicb = require('multicb');
var json = require('../../utils/json');
var canUseReact = require('../../utils/can-use-react');

if (canUseReact()) run();


function run() {
  loadCSS('/static/css/collection-enhanced.min.css');

  var done = multicb({pluck: 1});
  loadState(done());
  loadScript(done());

  done(function(err, res) {
    if (err) return console.error(err);
    var state = res[0];
    require('./collection')(state);
  });
}


function loadState(done) {
  json(window._global.stateUrl, done);
}


function loadScript(done) {
  require.ensure(['./collection'], function() {
    done(null);
  });
}
