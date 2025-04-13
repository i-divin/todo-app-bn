
import task from '../models/task.js';
import mongoose from "mongoose";

const taskDelete = async(req,res) =>{
    try {
        // Check database connection
        if (mongoose.connection.readyState !== 1) {
            throw new Error('Database not connected');
        }

        const id = req.params.id;
        
        // Verify user exists
        const existTask = await task.findById(id);
        if(!existTask){
            return res.status(400).json({message:"Task not found"});
        }

        // Perform delete with write concern
        const deleteResult = await task.findByIdAndDelete(id, null, { 
            writeConcern: { w: 'majority', j: true } 
        });

        if (!deleteResult) {
            return res.status(500).json({message:"Delete operation failed"});
        }

        // Verify deletion persisted
        const verification = await task.findById(id);
        if (verification) {
            console.error('Delete verification failed - Task still exists:', id);
            return res.status(500).json({
                message: "Delete not persisted in database",
                deleted: false
            });
        }

        res.status(200).json({
            message: "Task deleted successfully",
            deleted: true,
            deletedCount: 1
        });

    } catch (error) {
        console.error('Delete error:', error);
        res.status(500).json({
            message: "Delete operation failed",
            error: error.message
        });
    }
}

export default taskDelete;
