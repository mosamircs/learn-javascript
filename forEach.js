// var fruits=["banana","orange","watermelon"];
// function fruitsUpper(fruit){
//     fruit+="fruit";
//     fruit=fruit.toUpperCase();
//     console.log(fruit);
// }
// fruits.forEach(fruitsUpper);

words = ["cat", "in", "hat"];
words.forEach(function(element, index, array) {
  console.log("Word " + index + " in " + array.toString() + " is " + element);
});