'use strict'
console.log("____________task4_______________________");

function primeNumber(lastNumber){
  let arr=[];
    nextPrime:
      for (var i = 2; i <= lastNumber; i++) {
        for (var j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime;
        }
        arr.push(i);
      }
      return arr;
  }
  console.log(primeNumber(200));
