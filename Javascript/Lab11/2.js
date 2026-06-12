//2) Write a Node.js program to create an HTTP server that displays a welcome message.
const http = require("http");
const server = http.createServer((req,res) => {
    res.writeHead; 200,{"Content-Type":"text/plain"};
    res.write("welcome to node.js HTTP server");
    res.end();
});
const PORT = 3000;
server.listen(PORT,() => {
    console.log(`server running at http://localhost:${PORT}`);
});