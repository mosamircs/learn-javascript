function cat(){
    function purr(){
        return "purr";
    }
    console.log(purr());
    var meow=function(max){
        var catMessage="";
        for(var i =0;i<max;i++){
            catMessage+="meow ";
        }
        return catMessage;
    }
    console.log(meow(2));


}
cat();