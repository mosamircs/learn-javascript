var mohamed="hello my name is mohamed and I'm looking for classic book";
function library(){
    var liberian="oh you look for classic literature follow me";
    console.log("global man"+mohamed);
    console.log("librian"+liberian);
    function classicSection(){
            var classicBook="classic book";
            console.log("global man"+mohamed);
            console.log("librian"+liberian);
            console.log("classic book "+classicBook);
    }
    //console.log("outside function classic section"+classicBook);
}
console.log("mohamed outside" + mohamed);
library();
//console.log("librian outside function "+liberian);
//console.log("outside function library"+classicBook);