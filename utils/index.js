const connection = require('../config/connection');
const {User, Thoughs} = require("../models");

const thoughSeeds = require('./thoughSeed.json');
const userSeeds= require('./userSeed.json');


connection.on('error', (err)=> err)
connection.once('open', async()=>{
    await Thoughs.collection.drop()
    await User.collection.drop()
    await Thoughs.collection.insertMany(thoughSeeds)
    let userIndex = 0
    for(var i = 0; i < thoughSeeds.length;i++){
        if(thoughSeeds[i].username === userSeeds[userIndex].username){
            await User.create({
                username:userSeeds[userIndex].username,
                email:userSeeds[userIndex].email,
                thoughs:thoughSeeds[i]
             })
        }
        userIndex++
    }
    console.info('Seeding complete! 🌱');
    process.exit(0)
})