const express = require('express');
const { registerUser, getAllUsers, updateUser ,deleteUser} = require('../controllers/userController');
const userRouter=express.Router();

userRouter.post("/register",registerUser);
userRouter.get("/",getAllUsers);
userRouter.update("/:id",updateUser);
userRouter.delete("/:id",deleteUser);

module.exports=userRouter;
