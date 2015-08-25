// Fake collections api. Should be replaced with calls to a real api.

var data = [{
  id: 'collection1',
  name: 'Collection 1'
}];


function get(id) {
  var d = data
    .filter(function(d) {
      return d.id === id;
    })[0];

  return Promise.resolve(d);
}


exports.get = get;
