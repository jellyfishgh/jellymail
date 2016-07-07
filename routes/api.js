var express = require('express');
var router = express.Router();
var url = require('url');

router.post('/', function(req, res, next) {
    console.log(req.body);
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("ok");
});

router.get('/', function(req, res, next){
    var search = url.parse(req.url);
    if(search.platform === 'iOS'){

    }else {
        
    }
});

module.exports = router;