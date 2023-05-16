const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const vinylsSchema = new Schema({
    band:{
        type: String,
        required: true,
    },
    album:{
        type: String,
        required: true
    },
    genre:{
        type: String,
    },
    price:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    }
})

const Vinyl = mongoose.model('Vinyl', vinylsSchema)
module.exports={Vinyl}