module.exports.copy = function(obj) {
    var oldKeys = Object.keys(obj);
    var newObj = new Object;
    //var newKeys = Object.keys(newObj);
    for (var key in oldKeys){
        var newKeys = Object.keys(newObj);
        oldKeys[key] = newKeys[key];
    }
    return newObj;
};

module.exports.extend = function(dest, src){
    for (var property in dest){
        dest.src
    }
};

module.exports.hasElems = function(newObj, arrayElem){
    for (var e in newObj){
        for (var i = 0; i < arrayElem.length; i++){
            if (e == arrayElem[i]){
                return true;
            }
        }
    }
};