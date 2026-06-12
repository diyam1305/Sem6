//(3) Write a Node.js program to delete a file and handle the error if the file does not exist.
const fs= require("fs");
fs.unlink("demo.txt",(err)=>{
    if(err){
        console.log("Error :",err);
    }
    else{
        console.log("File Deleted Successfully.");
    }
});