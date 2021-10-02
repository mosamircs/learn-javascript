function getClothing(isCold) {
    if (isCold) {
      var freezing = 'Grab a jacket!';
    } else {
      var hot = 'It’s a shorts kind of day.';
      console.log(freezing);
    }
  }
  //var are "hoisted", which means they're raised to the top of the function scope. So at run-time, the getClothing()
  getClothing();//prints undefined var hoisting problem solved in es6 by let and const