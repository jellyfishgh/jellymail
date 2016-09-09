const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'public/mails.json'), function(err, data){
    if(err) throw err;
    var obj = JSON.parse(data);
    var arr = [];
    for(var key in obj){
        arr.push(obj[key].length);
    }
    fs.writeFile(path.join(__dirname, 'public/count'), arr.join('\r\n'), (err) => {
        if (err) throw err;
        console.log('count created');
    });
});
