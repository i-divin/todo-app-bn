import { Router } from "express";
import User from "../models/User.js";


const userUpdate = async(req,res) =>{
    
    try {
        const {email , name , password} = req.body;

        const id = req.params.id

        const existUser = await User.findById(id)

        if(!existUser){
           return res.status(400).json({message:"Invalid user credetious"})
        }
        const updatedUser = await User.findByIdAndUpdate(id,{
            name:name,
            email:email,
            password:password
        },{new:true}
        )
        res.status(200).json({message:"User updated successfully",updatedUser})

    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

export default userUpdate;
