module.exports.copy = function(obj) {
    var newObj = {};
    for (var key in obj){
        newObj[key] = obj[key];
    }
    return newObj;
};

module.exports.extend = function(dest, src){
    for (var property in src){
        dest[property] = src[property];
    }
    return dest;
};

module.exports.hasElems = function(newObj, arrayElem){
  var result = true; //my result will be true until otherwise proven
  for (var i = 0; i < arrayElem.length; i++){
    if ( newObj[arrayElem[i]] === undefined){ //if the property in newObj (referenced from arrayElem [i]) is undefined
      result = false; //if above condition is true set result to false
    }
  }
  return result;
};
//if the object has the same properties in the array despite how many actual properties are in object then that will be true
