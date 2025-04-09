import { createTaskService } from "../services/tasks.service.js";

export const createTask = async(req,res) => {
    const user = req.user;
    try{
        if (!user) {
            return res.status(401).json({message:"unauthorized user!"})
        }
        const {title,description} = req.body;
        if (!title || !description) {
            return res.status(400).json({message:"please provide all fields!"})
        }
        const task = await createTaskService(user,taskData);
        return res.status(201).json({message:"task created successfully!",task})
    }catch{
        return res.status(500).json({message:'internal server error',error});
        }
    }

