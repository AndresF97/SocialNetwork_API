const {Schema, model} = require('mongoose');
const dayjs = require('dayjs')
const Reaction = require("./Reaction")

const thoughSchema = new Schema(
    {
        thoughtText:{
            type:String,
            require:true,
            minLength:1,
            maxLength:180
        },
        createdAt:{
            type: Date,
            default:dayjs().format()
        },
        username:{
            type:String,
            require:true
        },
        reactions:[Reaction]
    },{
        toJSON:{
            virtuals:true
        },
        id:false
    }
);

thoughSchema.virtual('reactionCount').get(()=>{
    return this.reactions.length
})

const Thoughs = model('Thoughs', thoughSchema)

module.exports = Thoughs