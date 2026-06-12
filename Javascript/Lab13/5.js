//(5) Write a Node.js program using the url module to parse and format a given web address.
const http=require("http");
const url=require("url");
const server=http.createServer((req,res)=>{
    let parsedUrl=url.parse(req.url,true); 
    let queryString=parsedUrl.query;
    if(parsedUrl.pathname=="/"){
        res.end(`Welcome ${queryString.name}`);
    }
});
server.listen(3000,()=>{
    console.log("Server running on port 3000");
});