var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i]+=" hole";
    donuts[i] = donuts[i].toUpperCase();
}
console.log(donuts);