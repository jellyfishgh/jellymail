var fs = require('fs');
var crypto = require('crypto');

var filePath = "D:\\xampp\\htdocs\\myphp\\ad\\index.html";

var stream = fs.createReadStream(filePath);
var md5Hash = crypto.createHash('md5');

stream.on('data', function (d) {
    md5Hash.update(d);
});
stream.on('end', function () {
    var md5 = md5Hash.digest('hex');
    console.log(md5);
});