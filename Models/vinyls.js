const mongoose = require('mongoose')
const Schema = require.Schema;

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
    launch:{
        type: Number,
        required: true
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