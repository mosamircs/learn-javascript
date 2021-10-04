const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//The for...in loop improves upon the weaknesses of the for loop by eliminating the counting logic and exit condition.

for (const index in digits) {
  console.log(digits[index]);
}