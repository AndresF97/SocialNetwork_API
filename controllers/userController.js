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
    }
    
}