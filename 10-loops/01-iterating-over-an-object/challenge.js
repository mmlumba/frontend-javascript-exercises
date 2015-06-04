module.exports.getKeys = function(keyValues){
    var resultArray = [];
    for (var i in keyValues){
        if (keyValues.hasOwnProperty(i)){
            resultArray.push(i);
        }
    }
    return resultArray;
};

module.exports.getValues = function(keyValues){
    var resultArray = [];
    for (var i in keyValues){
        if (keyValues.hasOwnProperty(i)){
            resultArray.push(keyValues[i]);
        }
    }
    return resultArray;
};

module.exports.objectToArray = function(keyValues){
    var resultArray = [];
    for (var i in keyValues){
        if (keyValues.hasOwnProperty(i)){
            resultArray.push(i + " is " + keyValues[i]);
        }
    }
    return resultArray;
};