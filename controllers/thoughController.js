const {User, Thoughs} = require('../models')


module.exports = {
    async getAllThoughs(req,res){
        try{
            const allThoughs = await Thoughs.find()
            res.status(200).json(allThoughs)
        }catch(err){
            res.status(500).json(err)
        }
    },
    async getSingleThough(req,res){
        try{
            const singleThough = await Thoughs.findOne({
                _id:req.params.thoughId
            })
            res.status(200).json(singleThough)
        }catch(err){
            res.status(500).json(err)
        }
    },
    async createThough(req, res){
        try{
            const createdThough = await Thoughs.create(req.body)
            const addToSpecificUser = await User.findByIdAndUpdate(
                {_id:req.body.userId},
                {$addToSet:{thoughs:createdThough._id}},
                {new:true}
            )
            if(!addToSpecificUser){
                return res.status(404).json({message:'Use not found!'})
            }
            return res.status(200).json({message:"Created a new though!"})
        }catch(err){
            res.status(500).json(err)
        }
    },
    async updateThough(req,res){
        try{
            const updatedThough = await Thoughs.findByIdAndUpdate(
                {_id:req.params.userId},
                {$set:req.body}
            );
            if(!updatedThough){
                return res.status(404).json({message:"Though not found"})
            }

            res.json({message:"updated though!"})
        }catch(err){

        }
    },
    async deleteThough(req,res){
        try{

        }catch(err){

        }
    },
    async createReaction(req,res){
        try{

        }catch(err){

        }
    },
    async deleteReaction(req,res){
        try{

        }catch(err){

        }
    }
}