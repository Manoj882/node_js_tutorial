/*
    ES Modules
------------------>

    - At the time Node.js was created, there was no built-in module system in
      JavaScript.
    - Node.js defaulted to CommonJS as its module system
    - As of ES2015, JavaScript does have a standardized module system as part of the 
      language itself.
    - That module system is called EcmaScript Modules or ES Modules or ESM for short  

 */




// // for 1st and 2nd pattern
// import add from './math-esm.mjs';

// console.log(add(5,5));

// // for third pattern
// import math from './math-esm.mjs';

// // console.log(math.add(5,5));
// // console.log(math.subtract(8,4));

// // it can be done by using destructuring - ES 2015

// const {add, subtract} = math;

// console.log(add(6,7));
// console.log(subtract(9,3));


// for 4th - pattern

// // 4th - pattern ---> 1st way
// import * as math from "./math-esm.mjs";

// const {add, subtract} = math;

// console.log(add(4,5));
// console.log(subtract(5,2));

// 4th - pattern ---> 2nd way
import {add, subtract} from "./math-esm.mjs";


console.log(add(4,5));
console.log(subtract(5,2));


/*
    ******* ES Modules Summary ***********

    - ES Modules is the ECMAScript standard for modules.
    - It was introduced with ES2015.
    - Node.js 14 and above support ES Modules.
    - Instead of module.exports, we use the export keyword.
    - The export can be default or named.
    - We import the exported variables or functions using the importkeyword.
    - If it is a default export, we can assign any name while importing
    - If it is a named export, the import name must be the same. 

 */

