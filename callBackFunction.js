// function expression catSays
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
  
  // function declaration helloCat accepting a callback
  function helloCat(callbackFunc,number) {
    return "Hello " + callbackFunc(number);
  }
  
  // pass in catSays as a callback function
 console.log(helloCat(catSays,10));