module.exports.favoriteNumber = function(fav, guess){
  if (fav > guess) {
    return "Too low";
  }
  else if (fav < guess) {
    return "Too high";
  }
  else {
    return "You got it!";
  }
};

module.exports.checkLock = function(num1, num2, num3, num4){
  if ((num1 === 3 || 5 || 7) && (num2 == 2) && (num3 >= 5 && num3 <= 100) && (num4 < 9 && num4 > 20)){
    return "correct";
  }
  else {
    return "incorrect";
  }
};

//module.exports.canIGet = undefined;
// (num1 == 3 || 5 || 7) && (num2 == 2) && (num3 >= 5 && num3 <= 100) && (num4 < 9 && num4 > 20)
