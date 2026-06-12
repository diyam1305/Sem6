//(1) WAP to define a Student schema with properties like name, age and course using Mongoose.
const mongoose=require('mongoose');
let studentSchema=new mongoose.Schema({
    rollNo:{type:Number, require:true},
    name:{type:String, require:true},
    age:{type:Number, require:true, min:0}
})
let Student=mongoose.model('students',studentSchema)
module.exports=Student;
