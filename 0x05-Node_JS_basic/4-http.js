// Importing required module
const http = require('http');

// Creating an HTTP server
const app = http.createServer((req, res) => {
    // Setting the response headers
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Sending the response body
    res.end('Hello Holberton School!\n');
});

// Making the server listen on port 1245
app.listen(1245);

// Exporting the app variable
module.exports = app;
