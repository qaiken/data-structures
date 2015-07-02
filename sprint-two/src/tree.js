var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree,treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){

  var searchNodes = function(node) {
    if( node.value === target ) {
      return true;
    }
    if( node.children ) {
      for(var i=0; i < node.children.length; ++i) {
        if( searchNodes(node.children[i]) ) {
          return true;
        }
      }
    }

    return false;
  };

  return searchNodes(this);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
