let float1 = 100.5;
let float2 = 5.00001;
let sum = summtion();
let sub = subtract();
let div=divide();
let quot = quotient();
let prod = product();
let remind = reminder();
logs(); 


function summtion() {
    return float1 + float2;
}

function subtract() {
    return float1 - float2;
}

function divide() {
    if(float2==0){
        return "can't divide on zero";
    }
    return float1 / float2;
}

function logs() {
    console.log(sum);
    console.log(sub);
    console.log(div);
    console.log(quot);
    console.log(prod);
    console.log(remind);
    console.log(odd_even(100000));
}

function product() {
    return float1 * float2;
}

function quotient() {
    
    let quotient = float1 / float2;
    return quotient;
}

function reminder() {
    return float1 % float2;
}
function odd_even(number){
    if (number % 2== 0 ){
        return "even";
    }
    else{
        return "odd";
    }
    return 
}