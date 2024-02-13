/*
    ********** Binary Data **********
    ----------------------------------

    --> Computers store and represent data in binary format
        which is a collection of 0s and 1s.

    --> Here, each 0s and 1s is called a binary digit or bit for short.

    --> To work with a piece of data, a computer needs to convert that data into its binary representation.

    
    ******* Character in binary format **********
    ----------------------------------------------

    V?

    --> Computer will first conver the character to a number, then convert that number
        to its binary representation.
    
    --> Computer will first convet V to a number that represents V   
    
    code: "V".charCodeAt()

    --> 86 is the numeric representation of the character V
    --> It is also called character code.


    ************ Character Sets ******************
    -----------------------------------------------

    --> Character Sets are predefined lists of characters represented by number
    --> Popular character sets - Unicode and ASCII
    --> Unicode character set dictates that 86 should represent character v


    ********* Character Encoding ****************
    ---------------------------------------------

    --> Character encoding dictates how to represent a number in a character 
        set as binary data before it can be stored in a computer.
    
    --> It dictates how many bits to use to represent the number
    
    --> Example of character encoding sytem is UTF-8.

    --> UTF-8 states that characters should be encoded in bytes (8 bits)

    --> Eight 1s or 0s should be used to represent the code of any character in binary
        4 => 100 => 00000100
        V => 86 => 01010110

    --> Similar guidelines also exist on how images and videos should be encoded
        and stored in binary format
    
 
 */