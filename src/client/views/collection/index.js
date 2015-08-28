var loadCSS = require('exports?loadCSS!fg-loadcss');
var multicb = require('multicb');
var loadJson = require('../../utils/loadJson');
var canUseReact = require('../../utils/can-use-react');

if (canUseReact()) run();


function run() {
  loadCSS('/static/css/enhanced.min.css');

  var done = multicb({pluck: 1});
  loadScript(done());
  loadState(done());

  done(function(err, res) {
    if (err) return console.error(err);
    var collection = res[0];
    var state = res[1];
    collection(state);
  });
}


function loadState(done) {
  loadJson(window._global.stateUrl, done);
}


function loadScript(done) {
  require.ensure(['./collection'], function(require) {
    done(null, require('./collection'));
  });
}
