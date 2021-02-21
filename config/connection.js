const mongoose = require('mongoose');
const URL = process.env.MONGO_URL;

const connectDB = async () => {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{
        console.log("DB is connected");
    }).catch((error)=>{
        console.log("error ayya hai!!!!", error);
    });
}

module.exports = connectDB;