var fruits = ["Apple","Banana"];
let first = fruits[0];
let last = fruits[fruits.length-1];
console.log("firts in array "+first);
console.log(`last in array ${last}`);
//another way for working with array
fruits.forEach(function (item,index){//loop throw array 
    console.log("the item is "+item+" at index "+index);
});
var newLength= fruits.push("orange");//add element and returns length of new array 
console.log(newLength);
console.log(fruits)
fruits.pop();//remove last
console.log(fruits)
fruits.shift();//remove first
console.log(fruits)
fruits.unshift("test");//add first 
console.log(fruits);
var index =fruits.indexOf("test");//return index of specific element 
console.log(index)
let removedElement = fruits.splice(1);//removes at specific location 
console.log(removedElement);
console.log(fruits);//after remove 
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];

console.log(vegetables);//new array mto work on 
let position = 1;
let numberOfElementsToBeDeleted=2;
var deleted=vegetables.splice(position,numberOfElementsToBeDeleted);
console.log(deleted);
console.log(vegetables);
let shallowCopy = fruits.slice() // this is how to make a copy
console.log(shallowCopy);

