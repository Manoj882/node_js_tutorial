// const greeting = require('./person.js');

// console.log(greeting.getMessage());

// greeting.setMessage('Hello universe');

// console.log(greeting.getMessage());

// const greeting1 = require('./person.js')
// console.log(greeting1.getMessage());

const Greeting = require('./person.js');

const greeting = new Greeting('Hello World');

console.log(greeting.getMessage());

greeting.setMessage('Hello Universe');

console.log(greeting.getMessage());

const greeting1 = new Greeting('Hello Jupiter')

console.log(greeting1.getMessage())


