module.exports.createCourse = function (courseTitle, courseDuration, courseStudents){
    var newCourse = {
      title: courseTitle,
      duration: courseDuration,
      students: courseStudents
    };
    return newCourse;
};

module.exports.addProperty = function(newObj, newProp, newValue){
    if (newProp in newObj) { 
        return newObj;
    }
    else {
        newObj[newProp]=newValue;
        return newObj;
    }
};

module.exports.formLetter = function(letterObject){
    if (letterObject.hasOwnProperty('recipient','msg','sender')){
        return "Hello " + letterObject['recipient'] + ",\n\n" + letterObject['msg'] + "\n\n" + "Sincerely," + "\n" + letterObject['sender'];
    }
};

module.exports.canIGet = function(item, money){
    var macProducts = {
        "MacBook Air": 999,
        "MacBook Pro": 1299,
        "Mac Pro": 2499,
        "Apple Sticker": 1
    };
    return macProducts[item] <= money;
};