var start = new Date(2015, 12, 24);
var end = new Date(2016, 3, 24);

console.log(start.toUTCString());
console.log(end.toUTCString());

console.log((end - start)/(1000*60*60*24));
