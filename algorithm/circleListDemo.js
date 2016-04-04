var LinkedList = require('./LinkedList.js');
var util = require('./util.js');

var list = new LinkedList([0,1,2,3]);
list.printMe();
var circle = new LinkedList([4,5,6,7,8,9], true);
circle.printMe();
circle.head = circle.head.getChild();
circle.printMe();
list.addList(circle.head);
console.log(list.isCircled());
console.log(list.getGateOfCircle().getValue());
