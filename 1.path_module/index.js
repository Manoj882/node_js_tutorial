/*
    ******* Path Module ******

    - The path module provides utilities for working with file and directory paths
 */

    const { log } = require("node:console");
//const path = require("node:path");

const path = require("path"); // here node: is optional


    
   //  console.log(__filename);

   //  console.log(__dirname);

   //  console.log(path.basename(__filename));
   //  console.log(path.basename(__dirname));

   //  console.log(path.extname(__filename));
   //  console.log(path.extname(__dirname));

   //  console.log(path.parse(__filename));
    
   //  console.log(path.format(path.parse(__filename)));

   //  console.log(path.isAbsolute(__filename));

   //  console.log(path.isAbsolute("./data.json"));

   // // join method

   // console.log(path.join("folder1", "folder2", "index.html"));
   // console.log(path.join("/folder1", "folder", "index.html"));
   // console.log(path.join("/folder1", "//folder2", "index.html")); // normalize more than one slash (/)
   // console.log(path.join("/folder1","//folder2","../index.html")); // jump one folder up
   // console.log(path.join(__dirname, "data.json"));


   // resolve method

   console.log(path.resolve("folder1", "folder2", "index.html"));
   console.log(path.resolve("/folder1", "folder", "index.html"));
   console.log(path.resolve("/folder1", "//folder2", "index.html")); // normalize more than one slash (/)
   console.log(path.resolve("/folder1","//folder2","../index.html")); // jump one folder up
   console.log(path.resolve(__dirname, "data.json"));




   /*
      ****************** Summary ***************

      node: Protocol

      --> Make it perfectly clear that the import is a Node.js built-in module
      --> Makes the import identifier a valid absolute URL
      --> Avoids conflicts for future Node.js built-in modules
    */

