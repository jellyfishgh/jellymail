var express = require('express');
var app = express();

//模板渲染引擎
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// 托管静态文件
app.use('/static', express.static('public'));

var index = require('./routes/index');
var user = require('./routes/user');
var mail = require('./routes/mail');
var error = require('./routes/error');

app.use('/', index);
app.use('/index', index);
app.use('/user', user);
app.use('/mail', mail);
app.use('/error', error);

var server = app.listen(process.env.PORT || 5050, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("app listening at http://%s:%s", host, port);
});
