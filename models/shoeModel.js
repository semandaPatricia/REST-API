const mongoose = require ('mongoose')

const shoeSchema = mongoose.Schema({

    brand:{
        type:String,
        required:true
    },
    material:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true,
    },
    size:{
        type:Number,
        required:true,
    },
    occasion:{
        type:String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

})

const shoeModel = mongoose.model( 'shoes' ,shoeSchema)

module.exports = shoeModel