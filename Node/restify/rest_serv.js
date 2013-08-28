var restify = require('restify');
var util=require('util');

function formater(req, res, body) {
    console.log('body:%j',body);

    if (body instanceof Error)
	return body.stack;

    if (Buffer.isBuffer(body))
	return body.toString('base64');

    return util.inspect(body);
}

var server = restify.createServer(
    {
	formatters:{
	    'application/restify; q=0.9': formater 
	}
    }
);

/*
  res.send will chose formater automatically
*/
function send(req, res, next) {
    res.send({'hello':req.params.name});
}


/*
  Allows you to add in handlers that run before routing occurs. 
  This gives you a hook to change request headers and the like if you need to. 
  Note that req.params will be undefined, as that's filled in after routing.
*/
server.pre(function(req, res, next) {
    req.headers.accept = 'application/json';
    console.log('pre called');
    return next();
});

/*
  Note that restify runs handlers in the order they are registered on a server. 
  So if you want some common handlers to run before any of your routes, issue calls to use() before defining routes.
*/
var fn1= function (req,res,next){console.log('this is func1 run before any rounting');next();}
var fn2= function (req,res,next){console.log('this is func2 run before any rounting');next();}

//this will be run before defining router
server.use([fn1,fn2]);

server.use(restify.acceptParser(server.acceptable));
//server.use(restify.dateParser());
//server.use(restify.authorizationParser());
server.use(restify.queryParser());
//server.use(restify.gzipResponse());
server.use(restify.bodyParser());

server.get('/hello', send);
server.post('/hello', send);
server.put('/hello', send);


server.on('after',function(request, response, route, error){
    console.log('after:'+route);
});

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});