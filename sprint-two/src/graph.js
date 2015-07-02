

var Graph = function(){
  this.nodes = [];
  // this.currI = 0;
};

Graph.prototype.addNode = function(node) {
  // create new node with value, id, edges
  var newNode = {
    // id: this.currI,
    value: node,
    edges: []
  };

  // add to graph
  this.nodes.push(newNode);

  // this.currI++
};

Graph.prototype.contains = function(node) {
  // loop through nodes and check if the current node.value === node passed in
  var found = false;

  _.each(this.nodes,function(currNode) {
    if( !found && currNode.value === node ) {
      found = true;
    }
  });

  return found;
};

Graph.prototype.removeNode = function(node) {
  var removeMatchingNodes = function(nodeList, nodeValue) {
    return _.filter(nodeList,function(currNode){
      return currNode.value !== nodeValue;
    });
  }

  // filter nodes that don't have values equal the node passed in
  this.nodes = removeMatchingNodes(this.nodes,node);

  _.each(this.nodes,function(currNode){
    currNode.edges = removeMatchingNodes(currNode.edges,node);
  });
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.some(this.nodes,function(currNode) {
    if( currNode.value === fromNode ) {
      return currNode.edges.indexOf(toNode) !== -1;
    }
  });
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  // for each this.nodes find fromNode, push toNode to fromNode.edges
  _.each(this.nodes,function(currNode) {
    if( currNode.value === fromNode ) {
      currNode.edges.push(toNode);
    }
  });
};

Graph.prototype.removeEdge = function(fromNode, toNode){

};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


