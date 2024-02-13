/*
    **************** Stream **************
    --------------------------------------

    --> A stream is a sequence of data that is being moved from one point to
        another over time.
    
    --> Ex. a stream of data being transferred from one file to another within the same computer.
    
    --> Work with data in chunks instead of waiting for the entire data to be available at once.

    --> If you're transferring file contents from fileA to fileB, you don't wait for entire fileA
        content to be saved in temporary memory before moving it into fileB.

    --> Instead, the content is transferred in chunks over time which prevents unnecessary
        memoray usage.
        
    --> Stream is infact a build-in mode module that inherits from the event emitter class    
 

    ************** Types of Streams ******************
    --------------------------------------------------

    --> Readable streams from which data can be read
    --> Writable streams to which we can write data
    --> Duplex streams that are both Readable and Writable
    --> Transform streams that can modify or transform the data as it is written and read

    Ex: Reading from a file as readable stream
    Ex: Writing to a file as writabke stream
    Ex: Sockets as a duplex stream
    Ex: File compression where you can write compressed data and read
        de-compressed data tp and from a file as a transform stream

 */


const fs = require('node:fs');

const readableStream = fs.createReadStream('./file.txt', {
    encoding: 'utf-8',
    highWaterMark: 2,
});

console.log(readableStream);


const writeableStream = fs.createWriteStream('./file2.txt');

readableStream.on('data', (chunk) => {
    console.log(chunk);
    writeableStream.write(chunk);
});