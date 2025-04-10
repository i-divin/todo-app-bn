import { Router } from "express";
import task from '../models/task.js';
import Task from "../models/task.js";


const taskUpdate = async(req,res) =>{
    
    try {
        const {title , description} = req.body;

        const id = req.params.id

        const existTask = await task.findById(id)

        if(!existTask){
           return res.status(400).json({message:"Invalid task credetious"})
        }
        const updatedTask = await task.findByIdAndUpdate(id,{
            title:title,
            description:description
        },{new:true}
        )
        res.status(200).json({message:"Task updated successfully",updatedTask})

    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

export default taskUpdate;