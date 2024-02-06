
// // 1st - pattern
// const add = (a, b) => {
//     return a + b;
// };

// export default add;

// // 2nd - pattern
// export default (a, b) => {
//     return a + b;
// };


// // 3rd - pattern

// const add = (a, b) => {
//     return a + b;
// };

// const subtract = (a, b) => {
//     return a - b;
// };

// // export default {
// //     add: add,
// //     subtract: subtract,
// // }

// // in case of same name (key and value), we can use only one like this

// export default {
//     add,
//     subtract,
// }


/*
    Note: In ES Modules we also have named exports where the variable or function
          name being exported must match while importing it
 */

// 4th - pattern

// In 4th -pattern, when we define the function we can add the export keyword at the start.

export const add = (a, b) => {
    return a + b;
};

export const subtract = (a, b) => {
    return a - b;
};
   

        