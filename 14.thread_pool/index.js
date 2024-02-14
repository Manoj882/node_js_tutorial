
const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 16;

const MAX_CALLS = 16;

const start = Date.now();

// // Synchronous Method Execution:
// for(let i =0; i < MAX_CALLS; i++){
//     crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

//     console.log(`Hash: `, Date.now() - start);
// }


// Asynchronous Method Execution:

for(let i =0; i < MAX_CALLS; i++){
    crypto.pbkdf2('password','salt', 100000, 512, 'sha512', () => {
        console.log(`Hash: `, Date.now() - start);
    });
}