var express = require('express'),
    router = express.Router();
var redis = require('redis'),
    client = redis.createClient({
        port: 6379,
        host: "127.0.0.1"
    });
client.on('error', function(err) {
    console.log("error:" + err);
});

router.get('/', function(req, res, next) {
    client.get("connections", function(err, reply){
        if(err) res.end(404);
        console.log(reply);
        res.render("pages/redis", {
            title:"redis demo",
            "thisYear": new Date().getFullYear(),
            reply:reply
        });
    });
});

module.exports = router;
