const fs = require('fs');
const path = require('path');

var file = path.join(__dirname, '../public/pm/history.md');

fs.readFile(file, function(err, data){
    if(err) throw err;
    var md = data.toString();
    console.log(md.split(/\n+/g));
});
