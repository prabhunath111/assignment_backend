const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: {
        type: String,
    },
    name: { 
        type: String, 
        require: false 
    },
    email: { 
        type: String,
         require: false
     },
     phone: {
         type: Number,
         require: false
     }
})

module.exports = mongoose.model('User', userSchema);