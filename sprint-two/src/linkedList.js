var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // create Node(value)
    var node = Node(value);

    // if this.head === null set this.head = Node(value)
    if (!this.head) {
      this.head = node;
    }

    // if this.tail exists, set this.tail's next to Node(value)
    if (this.tail) {
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
    var currHead = this.head;
    var nextHead = currHead.next;

    // set head to cached node
    this.head = nextHead;

    return currHead.value;
  };

  list.contains = function(target){
    // checkNodeValue - recursive, accepts node
    //   check if node.value === target, return true
    //   if node.next !== null, call it again
    //   else return false
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
