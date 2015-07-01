var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = Object.create(stackMethods);
  result.count = 0;
  result.storage = {};

  return result;
};

var stackMethods = {};

stackMethods.pop = function() {
  var result;
  if ( this.count < 1 ) {
    return;
  }
  this.count--;
  result = this.storage[this.count];
  delete this.storage[this.count];

  return result;
};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.size = function() {
  return this.count;
};
