var fs = require('fs');

fs.readFile('./public/mail_list_app.json', function(err, data) {
    if (err) throw err;
    var json = JSON.parse(data);
    var keys = Object.keys(json);
    var arr = [];
    keys.map(function(key) {
        arr.push('@"' + key.substring(1) + '"');
    });
    var str = arr.join(",");
    fs.writeFile('./public/app_mails', arr.join(','), (err) => {
        if(err) throw err;
        console.log("It\'s saved.");
    });
});
