var exec=require('child_process').exec;
var query_string=require('querystring');


function start(res, post_data){
    console.log('Reqest handler \'start\' is called');
    
    /*
      exec('ls -lah', function(error, stdout, stderr){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(stdout);
      res.end();
      });
    */

    var body = '<html>' +
        '<head>' +
        '<meata http-equiv = "Content-Type" content = "text/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action = "/upload" method = "post">' +
        '<textarea name = "text" rows = "20" cols = "60"></textarea>' +
        '<input type = "submit" value = "Submit Form" />' +
        '</form>' +
        '</body>' +
        '</html>'; 

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();

}

function upload(res, post_data){
    console.log('Request handler \'upload\' is called');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('You\'ve sent the text:'+query_string.parse(post_data).text);
    res.end();
}

exports.start=start;
exports.upload=upload;
