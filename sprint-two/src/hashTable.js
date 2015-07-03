var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit),
      currVal = this._storage.get(i);

  if (currVal) {
    currVal.push([k, v]);
  } else {
    this._storage.set(i, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit),
      result;

  _.each(this._storage.get(i), function (currArr) {
    if (currArr[0] === k) {
      result = currArr[1];
    }
  });

  return result;
};

HashTable.prototype.remove = function(k){
  this.insert(k,null);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
