const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { 
        type: String,
    },
    email: { 
        type: String,
     },
     phone: {
         type: Number,
     },
     password: {
         type: String, 
     },
     userImage: {
         type: String
     }
})

module.exports = mongoose.model('User', userSchema);