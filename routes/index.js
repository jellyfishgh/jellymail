var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var list = [
        "allmails",
        'mails',
        "redis",
        "error",
        "doctors"
    ];
    res.render('pages/index', {
        "title": 'index',
        "thisYear": new Date().getFullYear(),
        "list":list
    });
});

module.exports = router;
