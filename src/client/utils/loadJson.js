function loadJson(url, done) {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function() {
    if (xhr.status < 200 || xhr.status > 399) {
      done(new Error(xhr.responseText));
      return;
    }

    try {
      done(null, JSON.parse(xhr.responseText));
    }
    catch (e) {
      done(e);
    }
  });

  xhr.open('get', url);
  xhr.send();
}


module.exports = loadJson;
