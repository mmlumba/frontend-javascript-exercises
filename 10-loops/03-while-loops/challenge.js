module.exports.stream = function(conditionFn, actionFn){
    while (conditionFn == true){
        return actionFn();
    }
};

module.exports.sumNumbers = function(numArray){
    var counter = 0;
    while (counter < Array.prototype.slice.call(arguments)){
        var answer = numArray[counter]+numArray[counter+1];
    }
    return answer;
};

