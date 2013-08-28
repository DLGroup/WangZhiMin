var redis = require("redis");
var client1 = redis.createClient();
var client2 = redis.createClient();
msg_count = 0;

client1.on("subscribe", function (channel, count) {
    console.log("client1 subcrible:"+channel+","+count);

    client2.publish("a nice channel", "I am sending a message.");
    client2.publish("a nice channel", "I am sending a second message.");
    client2.publish("a nice channel", "I am sending my last message.");
});

client1.on("message", function (channel, message) {
    console.log("client1 message:" + channel + "," + message);
    msg_count += 1;
    if (msg_count === 3) {
        client1.unsubscribe();
        client1.end();
    }
});

client2.on("message", function (channel, message) {
    console.log("client2 message:" + channel + "," + message);
if (msg_count === 3) {
        client2.unsubscribe();
        client2.end();
    }
});

client1.incr("did a thing");
//client2.subscribe("a nice channel");
client1.subscribe("a nice channel");
//client2.subscribe("a nice channel");