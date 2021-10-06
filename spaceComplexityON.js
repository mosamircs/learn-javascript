//space complexity program measurements 
//O(n) because array space complexity based on length of array 
//and object also space based on length of keys 
//you should know that array is an object but indexed so no difference 
function doubleArray(array){
    let newArray=[];//the array  that make space complexity
    for (let i = 0; i < array.length; i++) {
         newArray.push(2*array[i]);
        
    }
    return newArray;
}
console.log(doubleArray([10,20,30,40,50]));
//space complexity use expression of auxillary space complexity
//and here it's o(n)based on length of array 