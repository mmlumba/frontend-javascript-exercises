module.exports.stream = function(conditionFn, actionFn){
    while (conditionFn() == true){
        actionFn();
    }
};

module.exports.sumNumbers = function(numArray){
    var counter = 0;
    var answer = 0;
    while (counter < numArray.length){
        answer += numArray[counter];
        counter++;
    }
    return answer;
};

