var express = require('express');
var router = express.Router();
var fs = require('fs');

router.use('/', function(req, res, next) {
    var query = req.query;
    var map = {
        'app': './public/mail_list_app.json',
        'server': './public/mail_map_server.json',
        'wrong': './public/wrong_mail.json'
    };
    var what = query.what;
    if (!map.hasOwnProperty(what)) what = 'wrong';
    var file = map[what];
    fs.readFile(file, function(err, data) {
        if (err) res.end('404');
        var mails = JSON.parse(data);
        //去重
        var obj = {};
        for (var mail in mails) {
            var key;
            if (mails instanceof Array) {
                key = mails[mail];
            } else if (mails instanceof Object) {
                key = mail;
            }
            if (obj.hasOwnProperty(key)) obj[key]++;
            else obj[key] = 1;
        }
        // 排序
        var array = [];
        for (var item in obj) {
            array.push({
                'key': item,
                'value': obj[item]
            });
        }
        array.sort(function(a, b) {
            return b.value - a.value;
        });
        //渲染
        res.render('pages/mails', {
            "title": what,
            "thisYear": new Date().getFullYear(),
            "mails": array
        });
    });
});

module.exports = router;
