//forloop  push join reverse string 
function reverseIt(string){
    let reversed = [];
    let len=string.length;
    for(let i=0;i<=len;i++){
        reversed.push(string.charAt(len-i));
    }
    return reversed.join('');
}
console.log(reverseIt("samir"))