var global=25;
function fun2(){
    var oops=20;
}
function fun1(){
    var output="";
    if(typeof global !="undefined"){
        output+="my global "+ global;
    }
    if(typeof oops !="undefined"){
        output+=oops;
    }
    console.log(output);
}

fun1();
fun2();