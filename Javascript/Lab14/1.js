//(1) Write an Express.js program to create a GET API that returns "Hello Express".
const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("Hello Express");
})
app.listen(3000,()=>console.log("Express server running on port 3000"))
