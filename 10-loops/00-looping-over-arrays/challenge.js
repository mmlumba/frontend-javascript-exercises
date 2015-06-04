module.exports.sumNumbers = function(number_array){
  var total = 0;
    for (var i = 0; i < number_array.length; i++){
      total += number_array[i];
    }
  return total;
};

module.exports.splitAndLowerCaseString = function(inputString){
    var array = inputString.toLowerCase();
    return array.split(",");
};

module.exports.addIndex = function(inputArray){
    var arrayStatement = "";
    var i = 0;
    var statementArray = [];
    for (i; i < inputArray.length; i++){
        arrayStatement = i + " is " + inputArray[i];
        statementArray.push(arrayStatement);
    }
  return statementArray;
};