import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import Teacher from "../models/Teacher";

export const registerTeacher=async(req,res)=>{
    const{nam,email,password,department,}=req.body;
}