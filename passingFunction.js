// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
  }
  
  // Call the movies function, pass in the function and name of movie
  movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
  }, "Finding Nemo");