Array.prototype.decimalfy = function() {
    for (i = 0; i < this.length; i++) {
      this[i] = this[i].toFixed(2);
    }
  };
  /**
   * And you don’t have to worry about adding new properties to objects. 
   * The for...of loop will only loop over the values in the object.
   */
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  for (const digit of digits) {
    console.log(digit);
  }