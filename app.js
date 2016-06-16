var express = require('express');
var app = express();

//模板渲染引擎
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// 托管静态文件
app.use('/static', express.static('public'));

var index = require('./routes/index');
var allmails = require('./routes/allmails');
var mails = require('./routes/mails');
// var redis = require('./routes/redis');
var error = require('./routes/error');
var doctors = require('./routes/doctors');

app.use('/', index);
app.use('/index', index);
app.use('/allmails', allmails);
app.use('/mails', mails);
// app.use('/redis', redis);
app.use('/error', error);
app.use('/doctors', doctors);

var server = app.listen(process.env.PORT || 5050, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("app listening at http://%s:%s", host, port);
});