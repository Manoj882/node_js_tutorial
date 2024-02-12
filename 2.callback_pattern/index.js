/*
    ******** Callbacks *********
    -----------------------------

    1) In JavaScript, functions are first class objects.
    2) A function can be passed as an argument to a function.
    3) A function can also be returned as valuies from other functions

    4) Any function that is passed as an argument to another function is called a callback function.

    5) The function which accepts a function as its argument or
       returns a function is called Higer Order Function.

     
    ********* Types of Callbacks **************
    -------------------------------------------

    1) Synchronous callbacks
    2) Asynchronous callbacks

    1) Synchronous callbacks
    --------------------------
    --> A callback which is executed immediately is called a s synchronous callback.
        For Example: list.sort(), list.map(), list.filter() method


    2) Asynchronous callbacks:
    ----------------------------
    
    --> A callback that is often used to continue or resume code execution
        after an asynchronous operation has completed.
     
    --> Callbacks are used to delay the execution of a function until a particular time or event has occurred.
    --> In Node.js have an asynchronous nature to prevent blocking of execution.
    --> Ex. reading data from a file, fetching data from a database or handling a network request
    
    Eg. 1: Asynchronous callbacks in browser:

    function callback(){
        document.getElementById("demo").innerHTML = "Hello World";
    }

    document.getElementById("btn").addEventListener("click", callback);

 */

    function greet(name){
        console.log(`Hello ${name}`);
    }

    function higherOrderFunction(callback){
        const name = "Ram";

        callback(name);

    }

    higherOrderFunction(greet);

