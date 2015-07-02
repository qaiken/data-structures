var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var result = Object.create(queueMethods);
  result.count = 0;
  result.total = 0;
  result.storage = {};

  return result;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.total] = value;
  this.count++;
  this.total++;
};

queueMethods.dequeue = function() {
  var result;
  if( this.count < 1 ) {
    return;
  }
  result = this.storage[this.total - this.count];
  delete this.storage[this.total - this.count];
  this.count--;
  return result;
};

queueMethods.size = function() {
  return this.count;
};
