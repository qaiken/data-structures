var BinarySearchTree = function(value){
  var result = Object.create(BinarySearchTree.prototype);

  result.value = value;
  result.left = null;
  result.right = null;

  return result;
};

BinarySearchTree.prototype.insert = function (newValue) {
  if ( newValue < this.value ) {
    if(this.left) {
      this.left.insert(newValue);
    } else {
      this.left = BinarySearchTree(newValue);
    }
  } else {
    if(this.right) {
      this.right.insert(newValue);
    } else {
      this.right = BinarySearchTree(newValue);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }

  if (value < this.value && this.left && this.left.contains(value)) {
    return true;
  }

  if (value > this.value && this.right && this.right.contains(value)) {
    return true;
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
