function wordBlanks(noun,adjective,verb,adverb){
    var result = "";
    //logic goes here
    result = adjective+ " "+noun + " "+ verb+ " "+adverb;

    return result;
}
console.log(wordBlanks("dog","big","ran",'quickly'))
console.log(wordBlanks("bike","slow","flew",'slowly'))