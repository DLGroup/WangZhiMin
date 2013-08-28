var serv=require('./serv.js');
var router=require('./router.js');
var request_handlers=require('./request_handlers.js');

var handle={};
handle['/']=request_handlers.start;
handle['/start']=request_handlers.start;
handle['/upload']=request_handlers.upload;

serv.start(router.route, handle);
