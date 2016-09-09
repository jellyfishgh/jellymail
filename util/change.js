const fs = require('fs');
const path = require('path');

function change(system) {
    var sys = whichSys(system);
    var wrapper = new Wrapper(sys);
    fs.readFile(path.join(__dirname, '../public/mail_list_app.json'), function (err, data) {
        if (err) throw err;
        var json = JSON.parse(data);
        var keys = Object.keys(json);
        var arr = [];
        keys.map(function (key) {
            arr.push(wrapper.wrap(key.substring(1)));
        });
        fs.writeFile(path.join(__dirname, `../public/${sys}_mails`), arr.join(','), (err) => {
            if (err) throw err;
            console.log(`${sys} is saved.`);
        });
    });
}

function Wrapper(sys) {
    this.wrap = sys === 'iOS' ? iWrap : aWrap;
}

function iWrap(value) {
    return '@"' + value + '"';
}

function aWrap(value) {
    return '"' + value + '"';
}

function whichSys(system) {
    var sys;
    switch (system) {
        case 'i':
        case 'iOS':
        case 'ios':
            sys = 'iOS';
            break;
        case 'a':
        case 'Android':
        case 'android':
            sys = 'Android';
            break;
        default:
            sys = 'Android';
    }
    return sys;
}

var args = process.argv.slice(2);
change(args[0]);
