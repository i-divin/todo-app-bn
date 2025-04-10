import { createTaskService,getAllTaskService } from "../services/tasks.service.js";

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
        const taskData = {title, description};
        const task = await createTaskService(user, taskData);
        return res.status(201).json({message:"task created successfully!",task})
    }catch (error) {
        return res.status(500).json({message:'internal server error',error});
        }
    }

    export const getAllTasks = async(req,res) =>{
        const user = req.user;
        try{
            if (!user) {
                return res.status(401).json({message:"user must be logged in!"})
            }
            const userTasks = await getAllTaskService(user);
            return res.status(200).json(userTasks);
        }catch(error){
            console.log(error)
            return res.status(500).json({message:'internal server error',error});
        }
    };
    

