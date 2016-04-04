var LinkedList = require('./LinkedList.js');
var util = require('./util.js');

var list1 = new LinkedList([1,2,3,'a','b']);
var list2 = new LinkedList([4,5,6]);
var list = new LinkedList([7,8,9,'e','f','g'], true);
console.log(list.getGateOfCircle().getValue());
list.printMe();
list1.addList(list.head);
list2.addList(list.head.getChild().getChild());
list1.printMe();
list2.printMe();
console.log(list1.getGateOfCircle().getValue());
console.log(list2.getGateOfCircle().getValue());
console.log(list1.isCircleCrossed(list2));
