// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
  };
  var lastMovie = function myMovie(movieName){
    console.log("the last movie is "+movieName);
};
  
  // Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
  }
  // Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");
movies(lastMovie, "Nemo");
