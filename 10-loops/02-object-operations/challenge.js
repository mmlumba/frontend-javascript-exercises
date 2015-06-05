module.exports.copy = function(newObj){
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