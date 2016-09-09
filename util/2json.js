const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '../public/primer_dataset.json'), (err, data) => {
    if (err) throw err;
    var obj = JSON.parse(data);
    console.log(obj.length);
});