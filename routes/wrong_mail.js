var express = require('express');
var router = express.Router();
var fs = require('fs');

router.use('/', function(req, res, next) {
    fs.readFile("./public/wrong_mail.json", function(err, data) {
        if (err) res.end('404');
        var obj = {};
        var arr = JSON.parse(data);
        arr.forEach(function(item) {
            if (obj.hasOwnProperty(item)) obj[item]++;
            else obj[item] = 1;
        });
        var array = [];
        for (var key in obj) {
            array.push({
                'key': key,
                'value': obj[key]
            });
        }
        array.sort(function(a, b) {
            return b.value - a.value;
        });
        res.render('pages/mail', {
            "title": "错误邮件列表",
            "thisYear": new Date().getFullYear(),
            "mails": array
        });
    });
});

module.exports = router;
