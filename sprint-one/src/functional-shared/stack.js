var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var result = {};

  result.count = 0;
  result.storage = {};

  _.extend(result,stackMethods);

  return result;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    var result;
    if( this.count < 1 ) {
      return;
    }
    this.count--;
    result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  },
  size: function() {
    return this.count;
  }
};
