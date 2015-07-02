var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.total = 0;
  this.storage = {};
};


Queue.prototype.enqueue = function(val) {
  this.storage[this.total] = val;
  this.total++;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var result;

  if (this.count < 1) {
    return;
  }

  result = this.storage[this.total - this.count];
  delete this.storage[this.total - this.count];
  this.count--;

  return result;
};

Queue.prototype.size = function() {
  return this.count;
};
