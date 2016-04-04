function Node(value, child) {
    this.value = value;
    this.child = child;
}
Node.prototype = {
    constructor: Node,
    setChild: function(node) {
        this.child = node;
    },
    getChild: function() {
        return this.child;
    },
    setValue: function(value) {
        this.value = value;
    },
    getValue: function() {
        return this.value;
    }
};

function LinkedList(array, flag) {
    this.size = array.length;
    this.head = new Node(array[0]);
    this.circled = flag;//是否包含环
    var temp = this.head, p;
    for (var i = 1; i < array.length; i++) {
        p = new Node(array[i]);
        temp.setChild(p);
        temp = p;
    }
    if(flag)p.setChild(this.head);//flag 为 true 时环形链表
}
LinkedList.prototype = {
    constructor: LinkedList,
    getNode: function(value){
        var temp = this.head;
        while(temp){
            if(temp.value === value)return temp;
            temp = temp.getChild();
        }
    },
    addList: function(head){
        var temp = this.head;
        while(temp.getChild()){
            temp = temp.getChild();
        }
        temp.setChild(head);
    },
    //t(n),s(1)返回倒数第K个结点
    getNodeOnLastK: function(k){
        var p1, p2, i = 0;
        p1 = p2 = this.head;
        while(p2 && i < k){
            p2 = p2.getChild();
            i++;
        }
        while(p2.getChild()){
            p1 = p1.getChild();
            p2 = p2.getChild();
        }
        return p1;
    },
    //得到两个线性单链表交点
    getCrossedNode: function(list){
        var temp = this.head;
        while(temp.getChild()){
            temp = temp.getChild();
        }
        temp.setChild(list.head);
        return this.getGateOfCircle();
    },
    //t(n),o(1)返回中间结点
    getMiddleNode: function(){
        var fast, slow;
        fast = slow = this.head;
        while(fast && fast.getChild()){
            fast = fast.getChild().getChild();
            slow = slow.getChild();
        }
        return slow;
    },
    //两个链表是否相交
    //A链表尾结点接到B链表头结点，看B是否是环？
    isCrossed1: function(list){
        var temp = this.head;
        while(temp.getChild()){
            temp = temp.getChild();
        }
        temp.setChild(list.head);
        temp = list.head;
        while(temp){
            temp = temp.getChild();
            if(temp === list.head)return true;
        }
        return false;
    },
    //看A,B两个链尾结点是否为同一个？
    isCrossed2: function(list){
        var temp1 = this.head, temp2 = list.head;
        while(temp1 && temp2){
            temp1 = temp1.getChild();
            temp2 = temp2.getChild();
        }
        while(temp1)temp1 = temp1.getChild();
        while(temp2)temp2 = temp2.getChild();
        return temp1 === temp2;
    },
    //带环链表是否相交？
    isCircleCrossed: function(list){
        var o1 = {}, o2 = {};
        this.isCircled(o1);
        list.isCircled(o2);
        var temp = o1.location;
        while(temp){
            if(temp === o2.location)return true;
            temp = temp.getChild();
            if(temp === o1.location)break;
        }
        return false;
    },
    // 默认升序
    isSorted: function(desc){
        var temp = this.head;
        while(temp){
            if(desc){
                if(temp.getValue() < temp.getChild().getValue())return false;
            }else{
                if(temp.getValue() > temp.getChild().getValue())return false;
            }
            temp = temp.getChild();
        }
        return true;
    },
    //默认升序
    sort: function(desc){
        var p = this.head, q = p.getChild();
        while(q){
            while(p.getChild()){
                if(p.getValue() > p.getChild().getValue()){
                    p = p.getChild();
                }
            }
            q = q.getChild();
        }
    },
    conbineOrderedList: function(orderdList){

    },
    //t(1)方法删除非尾结点
    deleteNode: function(node){
        var next = node.getChild();
        if(next){
            node.setValue(next.getValue());
            node.setChild(next.getChild());
        }
    },
    // t(n)判断单链表是否存在环
    // 如果存在环的话, fast 跟 slow 一定能碰上
    isCircled: function(obj){
        var fast, slow;
        fast = slow = this.head;
        while(fast && fast.getChild() && slow){
            fast = fast.getChild().getChild();
            slow = slow.getChild();
            if(fast === slow) {
                obj.location = fast;
                return true;
            }
        }
        return false;
    },
    //找到环的入口
    getGateOfCircle: function(){
        var fast, slow;
        fast = slow = this.head;
        while(fast && fast.getChild() && slow){
            fast = fast.getChild().getChild();
            slow = slow.getChild();
            if(fast === slow)break;
        }
        if(fast != slow)return null;
        fast = this.head;
        while(fast != slow){
            fast = fast.getChild();
            slow = slow.getChild();
        }
        return fast;
    },
    printMe: function() {
        var result = [];
        var temp = this.head;
        var first = true;
        while (temp) {
            result.push(temp.getValue());
            temp = temp.getChild();
            if(temp === this.getGateOfCircle()){
                if(temp === this.head)break;
                else {
                    if(first){
                        first = false;
                    }else break;
                }
            }
        }
        console.log(result.join(' '));
    },
    sum: function() {
        var sum = 0;
        var temp = this.head;
        while (temp) {
            sum += temp.getValue();
            temp = temp.getChild();
        }
        console.log('sum: ', sum);
        return sum;
    },
    reserve1: function() {
        var temp;
        if (this.size === 2) {
            temp = this.head.getChild();
            temp.setChild(this.head);
            this.head.setChild();
            this.head = temp;
        } else if (this.size > 2) {
            var i = this.head,
                j = i.getChild(),
                k = j.getChild();
            i.setChild();
            while (k.getChild()) {
                j.setChild(i);
                i = k.getChild();
                k.setChild(j);
                j = i.getChild();
                i.setChild(k);
                if (!j) {
                    this.head = i;
                    return;
                }
                k = j.getChild();
                if (!k) {
                    j.setChild(i);
                    this.head = j;
                    return;
                }
            }
            j.setChild(i);
            k.setChild(j);
            this.head = k;
        }
    },
    reserve2: function() {
        var first = this.head,
            node = first.getChild();
        first.setChild();
        (function(list, first, node) {
            if (!node) {
                list.head = first;
            } else {
                var temp = node.getChild();
                node.setChild(first);
                switchPotinter(list, node, temp);
            }
        })(this, first, node);
    },
    reserve3: function() {
        var f = this.head,
            p = f.getChild();
        if (p) q = p.getChild();
        f.setChild();
        while (p) {
            p.setChild(f);
            f = p;
            p = q;
            if (q) q = q.getChild();
        }
        this.head = f;
    }
};

module.exports = LinkedList;
