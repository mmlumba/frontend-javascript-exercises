module.exports.addItem = function(addSomething, inputArray){ //fix
  for (var i = 0; i < inputArray.length; i++){
    if (addSomething!=inputArray[i]){
      inputArray.push(addSomething);
    }
    /*else {
      return inputArray;
    }*/  
    return inputArray;
  }
};

module.exports.reverseSortedList = function(inputArray){
  for (var i = 0; i < Array.prototype.slice.call(arguments); i++){
    inputArray.push();
  }
  var sorted = inputArray.sort();
  return sorted.reverse();
};
