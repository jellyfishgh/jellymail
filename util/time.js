function formatTime(year, month, day) {
    var date = new Date(year, month - 1, day);
    console.log(date.toLocaleString());
    console.log(Math.floor(date.getTime() / 1000));
}

var args = process.argv.slice(2);

formatTime(args[0], args[1], args[2]);