var fs = require('fs');
var crypto = require('crypto');

var file = process.argv.slice(2)[0];
if(!file)file = "ad.json";
var filePath = "D:\\xampp\\htdocs\\myphp\\ad\\" + file;

var stream = fs.createReadStream(filePath);
var md5Hash = crypto.createHash('md5');

stream.on('data', function (d) {
    md5Hash.update(d);
});
stream.on('end', function () {
    var md5 = md5Hash.digest('hex');
    console.log(md5);
});