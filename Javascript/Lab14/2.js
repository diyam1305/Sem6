//(2) Write an Express.js program to create POST and PUT APIs to handle student data stored in an array.
const express = require('express');
const app = express();
let students=[
    {rollNo:1,name:"xyz",age:18},
    {rollNo:2,name:"abc",age:18},
    {rollNo:3,name:"pqr",age:18},
]
app.use(express.json());
app.post('/student',(req,res)=>{
    let {rollNo,name,age}=req.body;
    if(!rollNo){
        res.status(400).send("Roll No is required")
    }
    if(!name){
        res.status(400).send("Name is required")
    }
    if(!age){
        res.status(400).send("Age is required")
    }
    let student={
        "rollNo":rollNo,
        "name":name,
        "age":age
    }
    students.push(student);
    res.status(201).json(student);
})
app.put('/student/:rollNo',(req,res)=>{
    let {name,age}=req.body;
    let rollNo=req.params.rollNo;
    let index=students.findIndex((std)=>std.rollNo==rollNo);
    if(index==-1){
        res.status(404).send("Roll No not found")
    }
    if(!name){
        res.status(400).send("Name is required")
    }
    if(!age){
        res.status(400).send("Age is required")
    }
    students[index].name=name;
    students[index].age=age;
    res.status(200).json(students[index]);
})
app.listen(3000,()=>console.log("Express server running on port 3000"))