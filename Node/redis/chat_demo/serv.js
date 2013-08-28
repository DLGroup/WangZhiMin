var fs = require('fs')
, http = require('http')
, socketio = require('socket.io');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end(fs.readFileSync(__dirname + '/index.html'));
}).listen(8080, function() {
    console.log('Listening at: http://localhost:8080');
});

var redis=require('redis');
var sub = redis.createClient();
var pub = redis.createClient();
sub.subscribe('chat');

socketio.listen(server).on('connection', function (socket) {
    socket.on('chat', function (data) {
	console.log('chat msg:'+data);
        pub.publish('chat', data);
    });

    socket.on('join', function (data) {
	console.log('join msg:'+data);
        pub.publish('chat', 'new user joined');
    });

    /*
      Use Redis' 'sub' (subscriber) client to listen to any message from Redis to server.
      When a message arrives, send it back to browser using socket.io
    */
    sub.on('message', function (channel, message) {
	console.log("sub get msg:"+channel+","+message);
        socket.emit(channel, message);
    });
});