/*
    ************* fs module ************
    --------------------------------------

    --> The file system (fs) module allows you to work with the file system
        on your computer.


 */

    const fs = require("node:fs");

    console.log('first');

    const fileContents = fs.readFileSync('./file.txt', 'utf-8'); // it is synchronous function
    console.log(fileContents);

    console.log('second');

    fs.readFile('./file.txt', 'utf-8',(error, data) => {  // it is asynchronous function
        if(error){
            console.log(error);
        } else {
            console.log(data);
        }
    });

    console.log('third');

    console.log('****** File Write Function *******');

    fs.writeFileSync('./greet.txt', 'Hello Asia');

    fs.writeFile('./greet.txt', ' Hello Nepal!', { flag: "a"}, (error, data) => {
        if(error){
            console.log(error);
        } else {
            console.log('File written...');
        }
    });

