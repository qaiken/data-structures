var doublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var oldTail = null;
    var node = Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      oldTail = this.tail;
      oldTail.next = node;
    }

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

    this.head = node;
    this.head.next = oldHead;
  };

  list.removeHead = function(){
    if (!this.head) {
      return;
    }

    var currHeadVal = this.head.value;

    this.head = this.head.next;

    if(this.head) {
      this.head.previous = null;
    }

    return currHeadVal;
  };

  list.removeTail = function() {
    if (!this.tail) {
      return;
    }

    var currTailVal = this.tail.value;

    this.tail = this.tail.previous;

    if(this.tail) {
      this.tail.next = null;
    }

    return currTailVal;
  };

  list.contains = function(target){

    var node = this.head;

    while(node) {
    
      if( node.value === target ) {
        return true;
      }

      node = node.next;

    }

    return false;

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
