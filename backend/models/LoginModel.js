import mongoose from 'mongoose';
const loginSchema = new mongoose.Schema({
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    minLength:5
}
},
{
    timestamps:true
})

const LoginSchema = mongoose.model("LoginSchema",loginSchema);
export default LoginSchema;