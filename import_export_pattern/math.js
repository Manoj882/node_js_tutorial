
// // 1st pattern
// const add = (a, b) => a + b;

// module.exports = add;

// // 2nd pattern
// module.exports = (a, b) => a + b;

// // 3rd pattern
// const add = (a, b) => a +b;

// const subtract = (a, b) => a - b;

// // //before ecma 2015
// // module.exports = {
// //     add: add,
// //     subtract: subtract,
// // };


// //after ecma 2015
// module.exports = {
//     add,
//     subtract,
// };



// // 4th pattern
// module.exports.add = (a, b) => a +b;

// module.exports.subtract = (a, b) => a - b;

// 5th pattern
exports.add = (a, b) => a +b;

exports.subtract = (a, b) => a - b;




