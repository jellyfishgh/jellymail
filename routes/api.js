var express = require('express');
var router = express.Router();
var url = require('url');

var iosApi = {
    'login': ['a', 'b'],
    'regist': ['c']
}, androidApi = {
    'login': ['1', '2'],
    'regist': ['3']
};

router.get('/', function(req, res, next){
    if(req.query.platform === 'iOS'){
        res.json(iosApi);
    }else if(req.query.platform === 'Android') {
        res.json(androidApi);
    }else res.json(404);
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("ok");
});

module.exports = router;