const {User, Thoughs} = require('../models')


module.exports = {
    async getAllThoughs(req,res){
        // try{
            const allThoughs = await Thoughs.find()
            res.status(200).json(allThoughs)
        // }catch(err){
        //     res.status(500).json(err)
        // }
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
                {_id:req.params.thoughId},
                {$set:req.body}
            );
            if(!updatedThough){
                return res.status(404).json({message:"Though not found"})
            }

            res.json({message:"updated though!"})
        }catch(err){
            res.status(500).json(err)
        }
    },
    async deleteThough(req,res){
        try{
            const thoughToDelete = await Thoughs.findOneAndDelete(
                {_id:req.params.thoughId}
            )
            if(!thoughToDelete){
                return res.status(404).json({message:"Didn't find though to delete"})
            }
            return res.status(200).json(thoughToDelete)
        }catch(err){
            return res.json(err)
        }
    },
    async createReaction(req,res){
        try{
            const thoughToAddReaction = await Thoughs.findOneAndUpdate(
                {_id:req.params.thoughId},
                {$addToSet:{reactions:req.body}},
                {new:true}
            )
            if(!thoughToAddReaction){
                return re.status(404).req.json({message:"Couldnt find though with that Id"});
            }
            res.status(200).json(thoughToAddReaction)
        }catch(err){
            res.status(500).json(err)
        }
    },
    async deleteReaction(req,res){
        try{
            const thoughToDeleteReaction = await Thoughs.findOneAndUpdate(
                {_id:req.params.thoughId},
                {$pull:{reactions:req.params.reactionId}},
                {new:true}
            )
            if(!thoughToDeleteReaction){
                return res.status(404).json({message:"Couldnt find a reaction or a though with that Id"})
            }
            res.json(thoughToDeleteReaction)
        }catch(err){
            res.status(500).json(err)
        }
    }
}