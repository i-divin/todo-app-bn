import Task from '../models/task.js';
import User from '../models/User.js';
import ApiError from '../utils/errorHandler.js';



export const createTaskService = async(user,taskData) =>{
    const userData = await User.findById(user.id)  
    const {title,description}=taskData;
    if(!userData){
        throw new ApiError(`User with id = ${user.id} not found`, 404) 
    }
    const userId = user.id;  
    try{
        const newTask = await Task.create({
            user:userId,
            title,
            description
        });
        return newTask;
    }catch(error){
        throw new ApiError('Error creating task', error)
    }
};

export const getAllTaskService = async(user) =>{
    try{
        const userTasksData = await Task.find({user:user.id})
        return userTasksData;
    }
    catch(error){
        console.log(error)
        throw new ApiError('Error fetching tasks', error)
    }
}