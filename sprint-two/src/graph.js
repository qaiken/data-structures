

var Graph = function(){
};

Graph.prototype.addNode = function(node) {
  // create new node with value, id, edges
  this[node] = [];
};

Graph.prototype.contains = function(node) {
  return !!this[node];
};

Graph.prototype.removeNode = function(node) {
  delete this[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.indexOf(this[fromNode], toNode) > -1;
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var idx1 = _.indexOf(this[fromNode], toNode),
      idx2 = _.indexOf(this[toNode], fromNode);

  if (idx1 > -1 && idx2 > -1) {
    this[fromNode].splice(idx1, 1);
    this[toNode].splice(idx2, 1);
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this, function (edges, node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


