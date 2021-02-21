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
     img: {
         type: String
     }
})


module.exports = mongoose.model('User', userSchema);

// const imageSchema = new mongoose.Schema({
//     name: String,
//     desc: String,
//     img:
//     {
//         data: Buffer,
//         contentType: String
//     }
// });
// module.exports = mongoose.model('ImageSchema', imageSchema);
