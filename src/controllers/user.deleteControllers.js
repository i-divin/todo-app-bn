
import User from "../models/User.js";
import mongoose from "mongoose";

const userDelete = async(req,res) =>{
    try {
        // Check database connection
        if (mongoose.connection.readyState !== 1) {
            throw new Error('Database not connected');
        }

        const id = req.params.id;
        
        // Verify user exists
        const existUser = await User.findById(id);
        if(!existUser){
            return res.status(400).json({message:"User not found"});
        }

        // Perform delete with write concern
        const deleteResult = await User.findByIdAndDelete(id, null, { 
            writeConcern: { w: 'majority', j: true } 
        });

        if (!deleteResult) {
            return res.status(500).json({message:"Delete operation failed"});
        }

        // Verify deletion persisted
        const verification = await User.findById(id);
        if (verification) {
            console.error('Delete verification failed - user still exists:', id);
            return res.status(500).json({
                message: "Delete not persisted in database",
                deleted: false
            });
        }

        res.status(200).json({
            message: "User deleted successfully",
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

export default userDelete;
