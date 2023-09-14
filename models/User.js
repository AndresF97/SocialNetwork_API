const {Schema, model} = require("moongose");

const userSchema = new Schema(
    {
        username:{
            type:String,
            unique:true,
            trim: true
        },
        email:{
            type:String,
            require:true,
            unique:true,
            match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, `Please fill valid email address`],
        },
        thoughs:[
            {
                type: Schema.Types.ObjectId,
                ref:'Thoughs'
            }
        ],
        friends:[
            {
                type:Schema.Types.ObjectId,
                ref:'User'
            }
        ]
    },{
        toJSON: {
            virtulas:true
        },
        id:false
    }
);

userSchema.virtula('friendCount').get(()=>{
    return this.friends.length
})

const User = model('User', userSchema)

module.exports = User;