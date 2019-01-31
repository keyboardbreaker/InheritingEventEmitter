//byte = 8bits 01010101

//8 bytes, 8 x8 = 64 bits of zeros and ones
//from v8 JS Engine
var buffer = new ArrayBuffer(8); 
var view = new Int32Array(buffer); // a number, integer, stored with 32 bits
// can only store 2 numbers in view.
//as each number is 32 bits

view[0] = 10;
view[1] = 15;
console.log(view);

//cant add another number, wont error but no storage from view[2];