var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {},
      count = 0,
      total = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[total] = value;
    total++;
    count++;
  };

  someInstance.dequeue = function(){
    var result;

    if (count < 1) {
      return;
    }

    result = storage[total - count];
    delete storage[total - count];
    count--;

    return result;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
