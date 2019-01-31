var buf = new Buffer.from('hello', 'utf8'); 
//use buffer.from as buffer is plan deprecated

console.log(buf); //hexadecimal
console.log(buf.toString()); //string equivalent
console.log(buf.toJSON()); // object
console.log(buf[2]); //behaves like an array, can retrieve values

buf.write('wo'); //can write to buffer
console.log(buf.toString()); //show  results
