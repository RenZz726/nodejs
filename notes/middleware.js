// Middleware are modules or functions that have access to request and response object
// They sits in the middle of incomming requests and outgoing responses 
// It can make changes to request and response objects

// middleware
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// }

const server = createServer((req, res) => {
    logger(req, res, () => {
        if (req.url === '/api/users' && req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(users));
            res.end();
        } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
            // res.setHeader('Content-Type', 'application/json');
            // res.write(JSON.stringify({id: 1, name: 'John Doe'}));
            // res.end();
            const id = req.url.split('/')[3];
            const user = users.find((user) => user.id === parseInt(id));
            res.setHeader('Content-Type', 'application/json');
            if(user) {
                res.write(JSON.stringify(user));
            } else {
                res.statusCode = 404;
                res.write(JSON.stringify({message: 'User not found'}));
            }
            res.end();
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'Route not found'}));
            res.end();
        }
    })
    
})

// Cleaned up 

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route handler for  GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));

    if(user) {
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
    }
    res.end();
}

// Not found handler 
// const notFoundHandler = (req, res) => {
//     res.statusCode = 404;
//     res.write(JSON.stringify({message: 'Route not found'}));
//     res.end();
// }

// const server = createServer((req, res) => {
//     logger(req, res, () => {
//         if (req.url === '/api/users' && req.method === 'GET') {
//             getUsersHandler(req, res);
//         } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
//             getUserByIdHandler(req, res);
//         } else {
//             notFoundHandler(req, res);
//         }
//     })
    
// })

// how get data from the body of request (req.body in express.js)