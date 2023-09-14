const {Schema, Types} = require('mogoose');
const dayjs = require('dayjs')

const reactionsSchema = new Schema (
    {
        reactionBody:{
            type:String,
            require:true,
            maxLength:280
        },
        reactionId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },        
        createdAt:{
            type: Date,
            default:dayjs().format()
        }
    },{
        toJSON:{
            virtuals:true
        },
        id: false
    }
)

module.exports = reactionsSchema