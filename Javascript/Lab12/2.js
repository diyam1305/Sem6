//(2) Write a Node.js program to read a file and append new content into it.
const fs= require("fs");
fs.readFile("2.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error :",err);
    }
    else{
        console.log("Data :",data);
    }
});
fs.appendFile("2.txt"," World",(err)=>{
    if(err){
        console.log("Error:",err);
    }
    else{
        console.log("Data Appended Successfully");
    }
});