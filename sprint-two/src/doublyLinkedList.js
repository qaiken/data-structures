var doublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // create Node(value)
    var oldTail = null;
    var node = Node(value);

    // if this.head === null set this.head = Node(value)
    if (!this.head) {
      this.head = node;
    } else {
      oldTail = this.tail;
      oldTail.next = node;
    }

    // set list's tail to Node(value)
    this.tail = node;
    this.tail.previous = oldTail;
  };

  list.addToHead = function(value) {
    var oldHead = null;
    var node = Node(value);

    if (!this.tail) {
      this.tail = node;
    } else {
      oldHead = this.head;
      oldHead.previous = node;
    }

    // set list's tail to Node(value)
    this.head = node;
    this.head.next = oldHead;
  };

  list.removeHead = function(){
    // if no head, return
    if (!this.head) {
      return;
    }
    // else cache the head's next
    var currHeadVal = this.head.value;

    // set head to cached node
    this.head = this.head.next;

    return currHeadVal;
  };

  list.removeTail = function() {
    // if no tail, return
    if (!this.tail) {
      return;
    }

    this.tail = this.tail.previous;
    this.tail.next = null;

    // // else cache the head's next
    // var currHeadVal = this.head.value;

    // // set head to cached node
    // this.head = this.head.next;

    // return currHeadVal;
  };

  list.contains = function(target){
    // checkNodeValue - recursive, accepts node
    //   check if node.value === target, return true
    //   if node.next !== null, call it again
    //   else return false
    var checkNodeValue = function(node) {
      if( node.value === target ) {
        return true;
      }

      if(node.next) {
        return checkNodeValue(node.next);
      }

      return false;
    };

    return checkNodeValue(this.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
