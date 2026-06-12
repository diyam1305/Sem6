//(1) Write a Node.js program to create and write content into a file.
const fs = require("fs");
fs.writeFile("1.txt","Hii",(err)=>{
    if(err){
        console.log("Error :",err);
    }
    else{
        console.log("File Written Successfully");
    }
});
