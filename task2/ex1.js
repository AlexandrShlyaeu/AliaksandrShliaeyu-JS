'use strict'
// 1. Write a simple JavaScript function to join all elements of the following array into a string

// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output : 
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
console.log("____________task1_______________________");

function concat(array, operator) {
  let result ="";
  for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i !== array.length-1) result += operator;
    }
  return result;
}

var myColor = ["Red", "Green", "White", "Black"];

console.log(concat(myColor, '/'));

