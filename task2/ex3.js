// 3. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. Go to the editor

// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

console.log("____________task3_______________________");


function validator(arr){
    let outputArray = arr.filter((val)=>val);
  return outputArray;
}

console.log(validator([NaN, 0, 15, false, -22, '', undefined, 47, null]));
