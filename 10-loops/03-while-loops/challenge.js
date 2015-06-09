module.exports.stream = function(conditionFn, actionFn){
    while (conditionFn() == true){
        return actionFn();
    }
};

module.exports.sumNumbers = function(numArray){
    var counter = 0;
    while (counter < numArray.length){
        var answer += numArray[counter];
        counter++;
    }
    return answer;
};

