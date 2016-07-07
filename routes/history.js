var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    console.log(req.body);
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("ok");
});

module.exports = router;