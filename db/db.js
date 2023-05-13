// mongoose.set('strictQuery', true)
require('dotenv').config();
const mongoose = require('mongoose')

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('>>> db on <<<')
    } catch (error) {
        console.log('>>> db off <<<')
    }
}
module.exports={connect}