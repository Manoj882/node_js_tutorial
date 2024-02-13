
/*

    ***************** Asynchronous JavaScript ********************
    --------------------------------------------------------------

    JavaScript is a synchronous, blocking, single-threaded language

    1) Synchronous
    ----------------------

    --> If we have two functions which log messages to the console, code executes top down,
        with only one line executing at any given time.

        Eg. 1:

        function A(){
            console.log('A')
        }

        function B(){
            console.log('B')
        }

        A();
        B();

        --> Logs A and then B


    2) Blocking
    ----------------------------

    --> No matter how long a previous process takes, the subsequent
        processes won't be kick off until the former is completed.

    --> Web app runs in a browser and it executes an intensive chunk of code without returning control
        to the browser, the browser can appear to be frozen.

    3) Single-threaded
    ------------------------------   
    
    --> A thread is simply a process that your javascript program can use to run a task.

    --> Each thread can only do one task at a time.

    --> Javascript has just the one thread called the main thread for executing any code



Note: We want non-blocking asynchronous behaviour which is made possible by a
      browser for front end and Node.js for backend.

        
        



 */