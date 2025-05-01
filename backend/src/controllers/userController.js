const express=require("express");
const userService=require("../services/userService");
exports.getAllUsers = async (req, res) => {
    try{
        const users=await userService.getAllUsers();
        res.status(200);
        res.json({
            success:true,message:'users fetched successfully',
            data: users

        })
    }
    catch(error){
        res.status(500);
        res.json({
            success:false,
            message:'error fetching users',
            error:error.message
        })
    }

}
exports.registerUser = async (req, res) => {
    try {
        const {name,email,password,phone,role}=req.body;
        await userService.registerUser({name,email,password,phone,role});
        res.status(201).json({
            success:true,
            message:'user created successfully',
            data:user
        })  
    }catch(error){
        res.status(500).json({
            success:false,
            message:'error creating user',
            error:error.message
        })
    }
}

exports.updateUser=async(req,res)=>
{
    try{
        const {id}=req.params.id;
        const {name,email,password,phone,roll}=req.body;
        const users=await userService.updateUser(id,{name,email,password,phone,roll});
        if(!users){
            res.status(404).json({
                success:false,
                message:'user not found'
            })
        }
        res.status(200).json({
            success:true,
            message:'user updated successfully',
            data:users
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:'error updating user',
            error:error.message
        })
    }
}

exports.deleteUser=async(req,res)=>{
    try{
        const id=req.params.id;
        const user=await userService.deleteUser(id);
        res.status(200).json({
            success:true,
            message:'user deleted successfully',
            data:user
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:'error deleting user',
            error:error.message
        })
    }
}