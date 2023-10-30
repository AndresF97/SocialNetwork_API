const {User, Thoughs} = require('../models')


module.exports = {
    async getAllUser (req, res){
        try{
            const users = await User.find().populate('thoughs')
            res.status(200).json(users)
        }catch(err){
            res.status(500).json(err)
        }
    },
    async getOnUser(req,res){
        try{
            const user = await User.findOne({
                _id:req.params.userId
            }).populate('thoughs')
            res.status(200).json(user)
        }catch(err){
            res.status(500).json(err)
        }
    },
    async createUser(req,res){
        try{
            const newUser = await User.create(req.body);
            if(!newUser){
                return res.status(404).json({message:"Somthing went wrong, user was not created"})
            }
            res.json(newUser)
        }catch(err){
            return res.status(500).json(err)
        }
    },
    async updateUser(req,res){
        try{
            const upadtedUser = await User.findOneAndUpdate(
                {_id:req.params.userId},
                {$set:req.body},
                { runValidators: true, new: true }
            )
            if(!upadtedUser){
                return res.status(404).json({messgae:"User failed to updated!"})
            }
            res.json({message:"User was updated!"})
        }catch(err){
            res.status(500).json(err)
        }
    },
    async deleteUser(req,res){
        try{

        }catch(err){

        }
    },
    async createFriend(req,res){
        try{

        }catch(err){

        }
    },
    async deleteFriend(){
        try{

        }catch(err){

        }
    }
    
}