var express = require('express');
var router = express.Router();
var fs = require('fs');

router.use('/', function (req, res, next) {
    fs.readFile("./public/data", function (err, data) {
        if(err) res.end('404');
        //data:buffer
        res.render('pages/mail', {
            "title": "邮件列表"
            // "mails": data.toString().split("\r\n")
        });
    });
});

module.exports = router;