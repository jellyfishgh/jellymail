var LinkedList = require('./LinkedList.js');
var util = require('./util.js');

var list1 = new LinkedList([1,2,3]);
var list2 = new LinkedList([4,5,6]);
var list = new LinkedList([7,8,9]);
list1.addList(list.head);
list2.addList(list.head.getChild());
console.log(list1.isCrossed2(list2));
console.log(list1.getCrossedNode(list2).getValue());
