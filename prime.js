function prime(number){
    for(let i=2;i<number;i++){
        if(number % i===0){
            console.log(number+"is divisable by "+i)
            return false;
        }
    }
   return  true; 
}
console.log(prime(10));

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);