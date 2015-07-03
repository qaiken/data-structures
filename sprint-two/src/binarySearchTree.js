var BinarySearchTree = function(value){
  var result = Object.create(BinarySearchTree.prototype);
  result.value = value;
  result.left = null;
  result.right = null;
  return result;
};

BinarySearchTree.prototype.insert = function(value) {

  var setNodeValue = function(node,value) {

    if( value < node.value ) {
      if(!node.left) {
        node.left = BinarySearchTree(value);
      } else {
        setNodeValue(node.left, value);
      }
    }

    if( value > node.value ) {
      if(!node.right) {
        node.right = BinarySearchTree(value);
      } else {
        setNodeValue(node.right, value);
      }
    }

  };

  setNodeValue(this,value);

};

BinarySearchTree.prototype.contains = function(value) {

  var checkTreeforValues = function(node,value) {

    if( node.value === value ) {
      return true;
    }

    if( node.left && checkTreeforValues(node.left, value) ) {
      return true;
    }

    if( node.right && checkTreeforValues(node.right, value) ) {
      return true;
    }

    return false;

  };

  return checkTreeforValues(this,value);

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

  var runCb = function(node,value) {
    cb(node.value);

    if( node.left ) {
      runCb(node.left);
    }

    if( node.right ) {
      runCb(node.right);
    }
  };

  runCb(this,cb);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */