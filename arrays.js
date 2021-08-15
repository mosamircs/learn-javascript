let myArray=[1,2,3,4,5];
 for (let index = 0; index < myArray.length; index++) {
     element = myArray[index];
    console.log(element);
 }

 let mixedArray = [1,"M",'Mohamed',{"age":4},true];
 for (let index = 0; index < mixedArray.length; index++) {
    const element = mixedArray[index];
   console.log(element);
}
console.log(mixedArray);
let k=0;
let multiDimensionArray=[];
for(let i=0;i<mixedArray.length;i++){
    multiDimensionArray.push([i,mixedArray[i]]);
    console.log();
}
console.log(multiDimensionArray);
console.log(multiDimensionArray[3][1].age)

let poped=multiDimensionArray.pop();
console.log(poped)

let shifted=multiDimensionArray.shift();
console.log(shifted);

function addFirst(element,array){
    let extended=[];
    extended=[element,array]
    return extended;
}
let extended=addFirst(5,multiDimensionArray);
console.log(extended);