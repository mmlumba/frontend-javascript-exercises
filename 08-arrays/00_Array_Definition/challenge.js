//array = [];
module.exports.newArray = function(num1,num2,num3,num4){
  return Array.prototype.slice.call(arguments);
};

module.exports.firstAndLast = function(inputArray){
  for (var i = 0; i < Array.prototype.slice.call(arguments); i++ ){
    inputArray.push();
  }
  var lastElementIndex = inputArray.length - 1;
  var myArray = [inputArray[0], inputArray[lastElementIndex]];
  return myArray;
};
