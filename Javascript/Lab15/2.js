//(2) Write an Express.js program to create and fetch student records from MongoDB.
const express=require('express');
const mongoose=require('mongoose');
const Student=require('./1');
const app=express();
async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/Lab 15")
        console.log("MongoDB Connected")
    }
    catch(error){
        console.log(error)
    }
}
connectDB()
app.use(express.json());
app.get('/student',async(req,res)=>{
    try{
        const students=await Student.find();
        res.status(200).json(students);
    }
    catch(error){
        res.status(400).send(error)
    }
})
app.post('/student',async(req,res)=>{
    let {rollNo,name,age}=req.body;
    if(rollNo===undefined || typeof rollNo !== 'number'){
        return res.status(400).json({message:"Invalid or missing 'age'"});
    }

    if(!name || typeof name !== 'string'){
        return res.status(400).json({message:"Invalid or missing 'name'"});
    }

    if(age===undefined || typeof age !== 'number' || age<0){
        return res.status(400).json({message:"Invalid or missing 'age'"});
    }
    
    try{
        const student = await Student.create(req.body);
        res.status(201).json(student);
    }
    catch(error){
        res.status(400).send(error)
    }
})
app.listen(3000,()=>console.log("Express server running on port 3000"));