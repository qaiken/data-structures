var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = this.getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i,v);
};

HashTable.prototype.retrieve = function(k){
  var i = this.getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  this.insert(k,null);
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
HashTable.prototype.getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
