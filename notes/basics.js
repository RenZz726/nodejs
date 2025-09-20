// prerequities

// 1. Javascript Fundamentals (functions, loops, objects, classes etc.)
// 2. Asynchronous programming - promises, callbacks, async/await
// 3. HTTP Basics (Methods, status codes, etc)
// 4. How JSON APIs work
// 5. NPM (Node Package Manager)


// 1. Built on javascript
// 2. non-blocking 
// 3. single threaded
// 4. event loop

// there is no 'window' object since there is no browser, there is 'global' represents global object.
// there is no 'document' object, but there is 'process', that pertains to the current process.

// 1. utils.js
// 2. package.js

 
// module.exports = generateRandomNumber;
// to use this function on other files, we have to export it. 
// The system using here is commonjs(native nodejs module system)

// importing..
// const generateRandomNumber = require('./utils.js');
// commonjs syntax

// wrote "type": "module" in the package.json 
// to interact with the database, we use 3rd party packages like sequelize, monogoose 

const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'}
];

// here it is hard-coded, that is manually written into source code itself.

// export const getPosts = () => posts; 

// or 

const getPosts = () => posts;

export {
    getPosts
};

// export default getPosts; when there is only one thing the the file that calls must avoid {} braces.

// Why we use named export and default export?



// 1. Named Exports

// You can export many values from a single file (not multiple files).

// Each exported value keeps its original name.

// Importer must use {} and match the names exactly.

// 2. Default Export

// A file can have only one default export.

// When importing, you can give it any name.

// It’s often treated as the main purpose of that module.

// 3. Why Developers Use default

// It signals: “This is the primary thing this file is about.”

// Libraries like Express, React, Mongoose export their main function/class as default.

// import express from 'express';
// import mongoose from 'mongoose';


// So when you see a default export, you know that’s the main entry point of that module.
// Named exports are for additional helpers/utilities.

/*
    “With named exports, we can export multiple values from a single file, and each must be imported using its original name. 
    With a default export, we can export only one value per file, and it can be imported with any name. 
    The default export usually represents the main functionality of the file, such as a database connection, 
    so developers immediately know its primary purpose.”
*/

// import http module from 'http'

import http from 'http';
const PORT = 8000;
// now we are going to create a server

const server = http.createServer((req, res) => {

    res.write("Hello World!"); /* to write something to the browser */
    res.end(); /* If we are using any framework, no need for end the res */
    // res.end("\nEnding...");   
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

// Setting the header with content type is html
res.setHeader('content-Type', 'text/html');

// set the status code 
res.statusCode = 404;

// instead we can use like:
res.writeHead(500, {'content-type': 'application/json'})
res.end(JSON.stringify({ message: 'Server Error'}))

// we can add the scripts in the package.json file, that can be used to run the files.