const {connect, connection} = require("mongoose");


const conncectionURL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/SocialNetwork_API';


connect(conncectionURL)

module.exports = connection;
