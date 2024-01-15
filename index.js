
// load or import the file add.js
 
const addFunc = require('./add.js');

console.log('Hello world from index.js');

const sum1 = addFunc(3,4);
const sum2 = addFunc(7.5,5.5);

console.log(sum1);
console.log(sum2);
