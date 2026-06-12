//(3) Write a Node.js program to serve an HTML file through a server.
const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res) => 
{
    fs.readFile("2.html", (err, data) => 
    {
        if(err)
        {
            res.writeHead; 404,{"Content-Type":"text/plain"};
            res.write("File not found");
            res.end();
        }
        else
        {
            res.writeHead; 200,{"Content-Type":"text/html"};
            res.write(data);
            res.end();
        }
    })
});
const PORT = 3000;
server.listen(PORT,() => {
    console.log(`server running at http://localhost:${PORT}`);
});