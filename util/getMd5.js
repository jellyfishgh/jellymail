const fs = require('fs');
const crypto = require('crypto');

module.exports = (file, cb) => {
    const md5Hash = crypto.createHash('md5');
    const stream = fs.createReadStream(file);
    stream.on('error', (error) => {
        cb(error);
    });
    stream.on('data', (d) => {
        md5Hash.update(d);
    });
    stream.on('end', () => {
        cb(null, md5Hash.digest('hex'));
    });
};