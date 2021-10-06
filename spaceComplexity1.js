function sum(number){
    let summetion=0;//constatnt in space complexity
    for(let i=1;i<=number;i++){
        //it's not time complexity it's space variables in the program 
        //and summetion variable is number that takes approximetly constant time 
        //and i constant also
        summetion+=i;
    }
    return summetion;
}
console.log(sum(1000));
//space complexity measured by big O notation also but by variables space taken 
//this program O(1s) because variables is O(1)