var str1="my name is ";
var name1="mohamed";

let ourString  ="I come first ";
let second ="I come second";
ourString +=second;

let myName = "Mohamed";
let myString = "My name is "+myName+" and I'm well";

let string="Mohamed  Samir";


logs();
function logs(){
    console.log(str1+name1); 
    console.log(ourString);
    console.log(myString);
    console.log(string.length);
    console.log(string[0]);//M
    string="Hello world";
    console.log(string);
    let secondLastChar=string[string.length-2];
    console.log(secondLastChar);
    console.log(string[string.length-1]);//last chars
}