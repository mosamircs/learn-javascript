function sum(...nums) {
    let total = 0;  
    for(const num of nums) {
      total += num;
    }
    return total;
  }
console.log(sum(1,2,34,5,6,6,5,10,20));