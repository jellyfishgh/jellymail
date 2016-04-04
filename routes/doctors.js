var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next){
    fs.readFile('./public/doctors/lists.json', function(err, data){
        if(err) res.end(404);
        var lists = JSON.parse(data);
        var doctors = [];
        for(var i = 0; i < lists.length; i++){
            doctors.push(JSON.parse(fs.readFileSync('./public/doctors/'+lists[i].name+'.json')));
        }
        res.render('pages/doctors', {
            "title": "医生列表",
            "doctors": doctors
        });
    });
});

module.exports = router;
