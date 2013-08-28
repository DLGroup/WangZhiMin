function route(handle, path_name,res, post_data){
    console.log('About to route a request for '+path_name);
    if(typeof handle[path_name] == 'function'){
	return handle[path_name](res, post_data);
    }
    else{
	console.log('No request handler found for '+path_name);
	res.writeHead(404, {'Content-Type': 'text/plain'});
	res.write('404 Not Found');
	res.end();
    }
}

exports.route=route;