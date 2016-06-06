var ad = {
	"version": 1,
	"baseUrl": "http://10.5.47.238:8080/ad/",
	"maxCount": 5,
	"period": 2,
	"html": {
		"version": 1,
		"src": "index.html",
		"md5": "29fa0daea479fe657addd6c863e2f371"
	},
	"product": {
		"d10": {
			"version": 1,
			"startTime": 1465056000,
			"endTime": -1,
			"limit": 4,
			"remain": 2,
			"onlyme": 1,
			"device": {}
		}
	}
};

var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

var count = 0;

function exeFile(filePath) {
	fs.lstat(filePath, function(err, stats) {
		if (err) throw err;
		if (stats.isDirectory()) {
			fs.readdir(filePath, function(err, files) {
				if (err) throw err;
				files.map(function(file) {
					exeFile(path.join(filePath, file));
				});
			});
		} else if (stats.isFile()) {
			var stream = fs.createReadStream(filePath);
			var md5Hash = crypto.createHash('md5');
			stream.on('data', function(d) {
				md5Hash.update(d);
			});
			stream.on('end', function() {
				var md5 = md5Hash.digest('hex');
				var arr = filePath.split(path.sep);
				var pro = ad.product[arr[arr.length - 3]];
				var size = arr[arr.length - 2];
				var device = pro.device;
				if (!device[size]) device[size] = [];
				device[size].push({
					"md5": md5,
					"src": arr[arr.length - 1]
				});
				count++;
				if (count === 6) {
					fs.writeFile('D:\\xampp\\htdocs\\myphp\\ad\\ad.json', JSON.stringify(ad, censor, '\t'), function(err) {
						if (err) throw err;
						console.log("ad.json created");
					});
				}
			});
		}
	});
}

function censor(key, value) {
	if (value.length === 1 && value[0] === "") return [];
	else return value;
}

var filePath = 'D:\\xampp\\htdocs\\myphp\\ad\\d10';
exeFile(filePath);