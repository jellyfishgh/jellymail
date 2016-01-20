var express = require('express');
var router = express.Router();
var fs = require('fs');

router.use('/', function(req, res, next) {
    fs.readFile("./public/data", function(err, data) {
        if (err) res.end('404');
        //data:buffer
        var arr = data.toString().trim().split("\r\n");
        console.log(arr.length);
        var obj = {};
        arr.forEach(function(item) {
            var key = item.substr(item.lastIndexOf("@"));
            if (obj.hasOwnProperty(key)) obj[key]++;
            else obj[key] = 1;
        });
        fs.readFile('./public/wrong_mail.json', function(err, data) {
            if (err) res.end(404);
            var wm = JSON.parse(data.toString());
            for (var i = 0; i < wm.length; i++) {
                if (obj.hasOwnProperty(wm[i])) delete obj[wm[i]];
                else {
                    console.log(wm[i]);
                }
            }
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
            res.render('pages/allmails', {
                "title": "邮件列表",
                "thisYear": new Date().getFullYear(),
                "mails": array
            });
        });
    });
});

module.exports = router;
