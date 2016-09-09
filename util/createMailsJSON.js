const fs = require('fs');
const path = require('path');

function createMailsJson(mailsFile) {
    console.log(mailsFile);
    fs.readFile(mailsFile, function(err, data) {
        if (err) throw err;
        var arr = data.toString().trim().split('\r\n\r\n');
        var obj = {};
        var start = new Date(2015, 11, 24); //月份：0-11
        for (var i = 0; i < arr.length; i++) {
            var now = new Date(start.getTime() + i * 86400000);
            var value = arr[i].split('\r\n');
            var key = formatDate(now);
            obj[key] = value;
        }
        fs.writeFile(path.join(__dirname, '../public/mails.json'), JSON.stringify(obj, censor, '\t'), (err) => {
            if (err) throw err;
            console.log('mails.json created');
        });
    });
}

function censor(key, value) {
    if(value.length === 1 && value[0] === '')return [];
    else return value;
}

//格式化输出日期：19700101
function formatDate(now) {
    var year = now.getFullYear() + '';
    var month = now.getMonth() + 1;
    if (month < 10) month = '0' + month;
    var date = now.getDate();
    if (date < 10) date = '0' + date;
    return year + month + date;
}

// __dirname:指的是当前文件的路径,而非执行node命令时的路径
createMailsJson(path.join(__dirname, '../public/mails'));
