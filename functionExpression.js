var catSays = function(max) {//annonymous function 
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
  console.log(catSays(5));