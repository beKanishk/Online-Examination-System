import mongoose from 'mongoose';

const departmentschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    //SCORE,SCOPE,SAS
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]

},{
    timestamps:true,
})

const Department = mongoose.model("Department",departmentschema);
export default Department;