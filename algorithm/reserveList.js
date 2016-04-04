var LinkedList = require('./LinkedList.js');
var util = require('./util.js');

function main(n) {
    var min = 1;
    for (var i = min; i <= n; i++) {
        var array = util.createArray(i);
        console.log(array);
        console.log("**********************");
        var list = new LinkedList(array);
        list.printMe();
        list.sum();
        list.reserve2();
        console.log("-----------------------");
        list.printMe();
        list.sum();
        console.log("\n\n");
    }
}

var arg = process.argv.slice(2)[0];
arg = parseInt(isNaN(arg) ? 1 : arg);
main(arg);
