var fs = require('fs');
var path = require('path');

var file = '../public/pm/history.md';

fs.readFile(file, function(err, data){
    if(err) throw err;
    var md = data.toString();
    console.log(md.split(/\n+/g));
});
