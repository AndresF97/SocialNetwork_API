const {Schema, Types} = require("mongoose")


const likesSchema = new Schema(
    {   
        likeId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
        },
        username:{
            type:String,
            unique:true
        }
    },{
        toJSON:{
            virtuals:true
        },
        id:false
    }
)

module.exports =likesSchema