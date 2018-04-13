'use strict'
// buffer
console.log("____________task5_______________________");

function Buffer() {
  let buffer = '';
    return (bufferElement) => buffer += (" " + bufferElement)
}
const buffer = Buffer();

buffer('1');
buffer(null);
buffer(false);
buffer(15);

console.log(buffer());
