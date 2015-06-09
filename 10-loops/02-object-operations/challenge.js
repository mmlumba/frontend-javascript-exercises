module.exports.copy = function(obj) {
    //var oldKeys = Object.keys(obj);
    var newObj = {};
    //var newKeys = Object.keys(newObj);
    for (var key in obj){
        //var newKeys = Object.keys(newObj);
        newObj[key] = obj[key];
    }
    return newObj;
};

module.exports.extend = function(dest, src){
    for (var property in src){
        if ( dest[property] == null ) {
            dest[property] = src[property];
        }
    }
    return dest;
};

module.exports.hasElems = function(newObj, arrayElem){
    
        for (var i = 0; i < arrayElem.length; i++){
            if ( newObj[arrayElem[i]] != null ){
                return true;
            }
        }
};