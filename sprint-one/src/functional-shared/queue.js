var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var result = {};
  result.count = 0;
  result.total = 0;
  result.storage = {};

  _.extend(result,queueMethods);

  return result;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.total] = value;
  this.count++;
  this.total++;
};

queueMethods.dequeue = function() {
  // remove index at difference between total and count
  // which is smallest current index
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
