//forloop by index of string version
function reverse(string){
    let reversed = "";
    for(let i=string.length-1;i>=0;i--){
        reversed+=string[i];
    }
    return reversed;
}
console.log(reverse("samir"))