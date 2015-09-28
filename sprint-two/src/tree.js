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
  if (this.value === target) {
    return true;
  }

  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      if( this.children[i].contains(target) ) {
        return true;
      }
    }
  }

  return false;
};
