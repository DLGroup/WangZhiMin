var http=require('http');
var url=require('url');

function start(route, handle){
    http.createServer(function (req, res){
	var path_name=url.parse(req.url).pathname;
	console.log('Request for '+path_name+' received');
	
	var post_data='';
	req.addListener('data', function(chunck){
	    post_data += chunck;
	    console.log('Received POST data chunck\''+chunck+'\'');
	});

	req.addListener('end', function(){
	    route(handle, path_name, res, post_data);
	});
	
    }).listen(1337, '127.0.0.1');

    
    console.log('Server running at http://127.0.0.1:1337/');
}

exports.start=start;