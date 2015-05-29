module.exports.reversePlusOne = function(inputArray){
  for (var i = 0; i < Array.prototype.slice.call(arguments); i++){
    inputArray.push();
  }
  var myArray = inputArray.reverse();
  myArray.unshift(1);
  return myArray;
};

module.exports.plusesEverywhere = function(inputArray){
  for (var i = 0; i < Array.prototype.slice.call(arguments); i++){
    inputArray.push();
  }
  var myArray = inputArray.join('+');
  myArray.toString();
  return myArray;
};

module.exports.arrayQuantityPlusOne = function(inputArray){
  for (var i = 0; i < Array.prototype.slice.call(arguments); i++){
    inputArray.push();
  }
  var myPlusOne = inputArray.length + 1;
  return myPlusOne;
};
