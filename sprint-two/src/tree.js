var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  _.extend(newTree,treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  // create new tree node with value
  var newTree = Tree(value);
  newTree.parent = this;

  // push to tree instance
  this.children.push(newTree);

  return this;
};

treeMethods.removeFromParent = function() {

  var parentsChildren = this.parent.children;

  parentsChildren.splice(_.indexOf(parentsChildren,this),1);

  this.parent = null;

  return this;
};

treeMethods.contains = function(target){
  // function that checknode's value
  var checkNodeValue = function (node) {
    // if the node's value === target
    if (node.value === target) {
      return true;
    }

    // else if it has children
    if (node.children) {
      // for each of those children, we'll pass each node into the checknode function
      for (var i = 0; i < node.children.length; i++) {
        // if any of these return true
        if( checkNodeValue(node.children[i]) ) {
          return true;
          // return true
        }
      }
    }

    return false;
  };

  return checkNodeValue(this);
};
