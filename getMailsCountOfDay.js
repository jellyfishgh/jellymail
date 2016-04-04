var fs = require('fs');

fs.readFile('./public/mails.json', function(err, data){
    if(err) throw err;
    var obj = JSON.parse(data);
    var arr = [];
    for(var key in obj){
        arr.push(obj[key].length);
    }
    fs.writeFile('./public/count', arr.join("\r\n"), (err) => {
        if (err) throw err;
        console.log("count created");
    });
});
