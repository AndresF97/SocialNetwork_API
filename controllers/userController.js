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

        }catch(err){

        }
    },
    async updateUser(req,res){
        try{

        }catch(err){

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