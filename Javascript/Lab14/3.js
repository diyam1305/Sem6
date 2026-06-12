//(3) Write an Express.js program to create a DELETE API that removes a student record and test it in Postman.
const express=require('express');
const app=express();
let students=[
    {rollNo:1,name:"abc",age:18},
    {rollNo:2,name:"xyz",age:18},
    {rollNo:3,name:"pqr",age:18},
]
app.delete("/student/:rollNo",(req,res)=>{
    let rollNo=parseInt(req.params.rollNo);
    let index=students.findIndex((std)=>std.rollNo==rollNo);
    if(index==-1){
        res.status(404).send("Roll No not found")
    }
    let deltedStudent=students.splice(index,1);
    res.status(200).json(deltedStudent[0]);
})
app.listen(3000,()=>console.log("Express server running on port 3000"))