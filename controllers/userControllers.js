const userModel = require('../models/userModel')

//ADD A NEW USER TO THE DATABASE
const addUser= async (req,res)=>{
    const {name,age,address,email,phone} = req.body
    try {
        const newuser = await new userModel({name,age,address,email,phone})
        await newuser.save()
        res.send({user:newuser,msg:"New User added successfully!"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
}

//RETURN ALL USERS
const getUsers=async(req,res)=>{
    try {
        const allUsers = await userModel.find()
        res.send({allUsers})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
}

//EDIT A USER BY ID 
const updateUser = async(req,res)=>{
    try {
       const updatedUser = await userModel.updateOne({_id:req.params.id},{$set:{...req.body}});
        res.send({msg:"Successfully modified"})
    } catch (error) {
    res.status(400).send({msg:error.message})
    }
}

//REMOVE A USER BY ID
const deleteUser = async(req,res) =>{
    try {
    await userModel.deleteOne({_id:req.params.id})
    res.send({msg:"User successfully deleted"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
}

module.exports={addUser,getUsers,deleteUser,updateUser}