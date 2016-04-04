var LinkedList = require('./LinkedList.js');
var util = require('./util.js');

var array = util.createArray(5);
var list = new LinkedList(array);
list.printMe();
console.log(list.getMiddleNode().getValue());
list.deleteNode(list.getNodeOnLastK(2));
list.printMe();
console.log(list.getMiddleNode().getValue());
list.deleteNode(list.getNodeOnLastK(1));
list.printMe();
console.log(list.getMiddleNode().getValue());

/*

http://blog.csdn.net/v_JULY_v/article/details/6447013
http://www.cppblog.com/humanchao/archive/2008/04/17/47357.html
http://blog.csdn.net/anonymalias/article/details/11020477

翻转:
http://www.cnblogs.com/BrainDeveloper/archive/2011/08/28/2156171.html
http://blog.csdn.net/beiyetengqing/article/details/7596554
http://ceeji.net/blog/reserve-linked-list-cpp/

算法:
https://github.com/julycoding/The-Art-Of-Programming-By-July/blob/master/ebook/zh/Readme.md

http://wuchong.me/blog/2014/07/28/permutation-and-combination-realize/
http://wuchong.me/blog/2014/03/17/string-to-int/
http://wuchong.me/blog/2014/02/09/algorithm-sort-summary/
*/
