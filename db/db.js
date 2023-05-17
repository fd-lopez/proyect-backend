// mongoose.set('strictQuery', true)
const mongoose = require('mongoose')
require('dotenv').config();

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('DB ON')
    } catch (error) {
        console.log('DB OFF')
    }
}
module.exports={connect}