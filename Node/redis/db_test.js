var redis = require("redis");
var client = redis.createClient();

client.on('error', function (err){
    console.log('error ' + err);
});


//string 
client.set('str_key1', 'str_val1', function(err, res){console.log('write str_key1 ok');});

//hash
client.hset('hash_key1', 'hash_key1_field1', 'hash_key1_val1', function(err, res){console.log('write hash_field1 ok');});
client.hset(['hash_key1', 'hash_key1_field2', 'hash_key1_val2'],function(err, res){console.log('write write hash_field2 ok');});

//query
client.get('str_key1', function(err, res){console.log('get str_key1: '+res);});
client.hgetall('hash_key1', function(err, res){console.log('get hash_key1: '+res);});

client.quit();
