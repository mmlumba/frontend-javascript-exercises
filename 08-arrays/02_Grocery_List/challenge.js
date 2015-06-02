module.exports.addItem = function(addSomething, inputArray){ //fix
  if (inputArray.indexOf(addSomething) === -1){
    inputArray.push(addSomething);
  }
  return inputArray;
};

module.exports.reverseSortedList = function(inputArray){
  for (var i = 0; i < Array.prototype.slice.call(arguments); i++){
    inputArray.push();
  }
  var sorted = inputArray.sort();
  return sorted.reverse();
};
