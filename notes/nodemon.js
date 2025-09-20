// npm install -D nodemon - install nodemon as a develpment dependency
// If we make a code change, we must stop the server and restart it manaually.
// It is annoying during development.

// It will create a node_modules - It has dependencies and those also has dependencies

// When pushing the directory to the github we can avoid the node_modules(using .gitingonre file). 
// When someone uses the code and run npm it automatically installs the modules.


// .env file
// env variables are variables in the env or in the system, we can access it from entire program, from different programming languages.
// in node.js we have 'process' object

// we used to have installed the package .env, recent version needn't do that.

// in .env
port = 5000

// to get that make change in the scripts in package.json
    // "start": "nodemon --env-file=.env server.js"
// for accessing it 
    const PORT = process.env.PORT;

// The changes in the .env file doesn't cause automatic restart(nodemon only checks for .js, .ts, .json)

// 1. Create a nodemon.json in your project root:

// {
//   "watch": ["*.js", "*.env"]
// }


console.log(req.url);  /* '/' : shows url */
console.log(req.method); /* GET : shows the method*/

// using express we can do this using 
app.post('/users', () => {
});