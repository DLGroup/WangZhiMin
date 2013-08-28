var restify = require('restify');
var assert = require('assert');

// Creates a JSON client
var client = restify.createJsonClient({
  url: 'http://localhost:8080'
});


client.get('/hello?name=xiao', function(err, req, res, obj) {
  assert.ifError(err);
  console.log('%j', obj);
});
client.post('/hello', { name: 'xiao' }, function(err, req, res, obj) {
  assert.ifError(err);
  console.log('%j', obj);
});

client.put('/hello', { name: 'xiao' }, function(err, req, res, obj) {
  assert.ifError(err);
  console.log('%j', obj);
});

