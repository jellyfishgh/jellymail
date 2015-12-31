var express = require('express');
var router = express.Router();
var fs = require('fs');

router.use('/', function (req, res, next) {
    fs.readFile("./public/data", function (data) {
        res.end('404');
        res.render('mail', {
            "title": "邮件列表",
            "mails": data.split("\n")
        });
    });
});

module.exports = router;