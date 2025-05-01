const userModel=require("../models/userModel");
exports.getAllUsers=async()=>{
    const users=await userModel.find({});
    return users;
}
exports.registerUser=async({name,email,password,phone,role})=>{
    const user=await userModel.creatte({name,email,password,phone,role});
    return users;
}
exports.updateUser=async(id,{name,email,password,phone,role})=>{
    const user=await userModel.findByIdAndUpdate(id,{name,email,password,phone,role},{new:true});
    return user;
}
exports.deleteUser=async(id)=>{
    const user=await userModel.findByIdAndDelete(id);
    return user;
}
