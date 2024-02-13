/*
    ************* Streams ***************
    --------------------------------------

    --> A stream is a sequence of data that is being moved form one 
        point to another over time.

    --> Ex. a stream of data over the internet being moved from one computer to another.

    --> Ex. a stream of data being transferred from one file to another within a same computer.

    --> Process streams of data in chunks as they arrive instead of waiting for the entire
        data to be available before processing.

        Ex: Watching a video on YouTube

        --> The data arrives in chunks and you watch in chunks while the rest of the data
            arrives over time.

        Ex. transfering file contents from fileA to fileB
        
            --> The contents arrive in chunks and you transfer in chunks while the remaining contents arrive over time.
            --> Prevents unnecessary data downloads and memory usage


    **************** Buffer ********************
    --------------------------------------------
    
    --> Ex. streaming a video online
    
    --> If your internet connection is fast enough, the speed of the stream will be fast enough
        to instantlu fill up the buffer and send it out for processing.

    --> That will repeat till th stream is finished.
    
    --> If your connection is slow, after processing the first chunk of data that arrived, the video
        player will display a loading spinner which indicates it is waiting for more data to arrive.

    --> Once the buffer is filled up and the data is processed, the video player shows the video.
    
    --> While the video is playing, more data will continue to arrive and wait in the buffer.

    --> Bindary data, character sets and encoding <---> Buffers?


 */

    const buffer = new Buffer.from("Vishwas");



    console.log(buffer);
    console.log(buffer.toString());

    console.log(buffer.toJSON());
