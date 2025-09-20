// Make other types of requests - postman, curl

// 1. used postman extension
// 2. paste the localhost:5000 and send

    const server = http.createServer((req, res) => {
        
         if (req.method === 'GET') {
            try {
                if (req.url === '/') {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end("<h1>Home Page</h1>");
                } else if (req.url === '/about') {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end("<h1>About</h1>");
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end("<h1>Not found</h1>");
                }
            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Server Error");
            }
        } else {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end("Method not allowed");
        }

    });

// imported fs module(there are different methods) - async callbacks, sync version, promise version

import fs from 'fs/promises';

__filename, __dirname
// These can be used if we used ES module

// Here we are using our own
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url)

// import.meta.url : it will give the file url 
// fileURLToPath() : it will give only the path(not the full url)

// import path
import path from 'path'; /*It gives a bunch of utilities*/

// Instead of just print the contents in h1, load the actualfile
// path module has a method called 'join()' - each arguments that is being will be the part for file path

if (req.method === 'GET') {
        try {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html') 
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html') 
            } else {
                throw new Error('Not Found')
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Server Error");
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end("Method not allowed");
    }