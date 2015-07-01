var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {},
      count = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.pop = function(){
    var result;

    if (count < 1) {
      return;
    }
    count--;
    result = storage[count];
    delete storage[count];

    return result;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
