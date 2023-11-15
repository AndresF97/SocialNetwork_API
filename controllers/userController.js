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
            const userToDelete = await User.findOneAndDelete(
                {_id:req.params.userId}
            )
            if(!userToDelete){
                return res.status(404).json({message:"Couldn't delete user!"})
            }
            await Thoughs.deleteMany({_id:{$in:userToDelete.thoughs}})
            res.json({message:"User deleted and thoughs"})
        }catch(err){
            res.status(404).json(err);
        }
    },
    async createFriend(req,res){
        try{
            const userToGiveAFriend = await User.findOneAndUpdate(
                {_id:req.params.userId},
                {$addToSet:{friends:req.params.friendId}},
                {new:true}
            )
            if(!userToGiveAFriend){
                return res.status(404).json({message:"Couldn't add new friend to user"})
            }
            res.status(200).json(userToGiveAFriend)
        }catch(err){
            res.status(500).json(err)
        }
    },
    async deleteFriend(){
        try{
            const friendToDelete = await User.findOneAndUpdate(
                {_id:req.params.userId},
                {$pull:{friends:req.params.friendId}},
                {new:true}
            )
            if(!friendToDelete){
                return res.status(404).json({message:"Couldn't delete friend from user!"})
            }
            res.status(200).json(friendToDelete)
        }catch(err){
            return res.status(500).json(err)
        }
    }
    
}