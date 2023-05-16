// mongoose.set('strictQuery', true)
require('dotenv').config();
const mongoose = require('mongoose')

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('DB ON')
    } catch (error) {
        console.log('DB OFF')
    }
}
module.exports={connect}