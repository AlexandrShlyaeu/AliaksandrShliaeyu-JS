'use strict'
// 2. Write a JavaScript function which accept a incomeSting as input and swap the case of each character. 

// For example if you input 'The Quick Brown Fox' the outputString should be 'tHE qUICK bROWN fOX'

console.log("____________task2_______________________");

function invertCase(incomeSting){
  let outputString = '';
  for (let i = 0 ; i < incomeSting.length; i++){
    const char = incomeSting[i];
    outputString += char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
  }
  return outputString;
}

console.log(invertCase('tHE qUICK bROWN fOX'));
