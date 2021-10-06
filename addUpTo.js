//version loop
function addUpTo(number){
    let sum=0;
    for (let i = 1; i <= number; i++) {
        sum+=i;       
    }
    return sum;
}
console.log(addUpTo(10000));