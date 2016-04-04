function wordCount(str, spliter) {
    var arr = str.split(spliter);
    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
        else map.set(arr[i], 1);
    }
    var temp;
    for (var v of map) {
        if (!temp) temp = v;
        else if (temp[1] < v[1]) temp = v;
    }
    return temp[0];
}

var fs = require('fs');
var file = process.argv.slice(2)[0];
fs.readFile(file, function(err, data){
    if(err) throw err;
    console.log(wordCount(data.toString(), ' '));
});
