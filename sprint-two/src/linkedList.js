var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // create Node(value)
    var node = Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      // this also updates the head.next chain
      this.tail.next = node;
    }

    // set list's tail to Node(value)
    this.tail = node;
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
