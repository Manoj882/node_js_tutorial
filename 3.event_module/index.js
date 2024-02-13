
/*
    ********* Event Module *********

    1) The events module allow us to work with events in Node.js
    2) An event is an action or an occurrence that has happended in our application that 
       we can respond to.
    3) Using the events mopdule, we can dispatch our own custom events and respond to
       those custom events in a non-blocking manner
 */



const EventEmitter = require("node:events");


    const emitter = new EventEmitter(); // create instance / object of EventEmitter class

    emitter.on("order-pizza", (size, topping)=> { // emitter.on() method is used to register listeners,
        console.log(`Order received! Baking a ${size} pizza with ${topping}`);
    });

    emitter.on('order-pizza', (size) => {
        if(size === `large`) {
            console.log("Serving complimentary drink");
        }
    });

    console.log("Do work before event occurs in the system");

    emitter.emit("order-pizza", "large", "mushroom");  // emitter.emit() method is used to trigger the event.