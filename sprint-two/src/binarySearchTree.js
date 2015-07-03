var BinarySearchTree = function(value){
  var result = Object.create(BinarySearchTree.prototype);

  result.value = value;
  result.left = null;
  result.right = null;

  return result;
};

BinarySearchTree.prototype.insert = function (newValue) {
  var assignNextNode = function (node, value) {
    if ( value < node.value && !node.left ) {
      return node.left = BinarySearchTree(value);
    } else {
      assignNextNode(node.left,value);
    }

    if ( value > node.value && !node.right ) {
      return node.right = BinarySearchTree(value);
    } else {
      assignNextNode(node.right,value);
    }
  };

  assignNextNode(this, newValue);
};

BinarySearchTree.prototype.contains = function () {

};

BinarySearchTree.prototype.depthFirstLog = function () {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
