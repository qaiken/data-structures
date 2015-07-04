var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit),
    currBucket = this._storage.get(i),
    isKeyInBucket = false;

  if (currBucket) {
    isKeyInBucket = _.some(currBucket, function (currArray) {
      if (currArray[0] === k) {
        currArray[1] = v;
        return true;
      }
    });

    if (!isKeyInBucket) {
      currBucket.push([k, v]);
    }
  } else {
    this._storage.set(i, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k,remove){
  var i = getIndexBelowMaxForKey(k, this._limit),
    currBucket = this._storage.get(i),
    result = null;

  _.some(currBucket, function (currArr,i) {
    if (currArr[0] === k) {
      result = currArr[1];
      if(remove) {
        currBucket.splice(i,1);
      }
      return true;
    }
  });

  return result;
};

HashTable.prototype.remove = function(k){
  return this.retrieve(k,true);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
