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
    }
}