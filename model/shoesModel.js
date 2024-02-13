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
    }

}, { timestamps: true })

const Shoe = mongoose.model('Shoe' ,shoeSchema);

module.exports = Shoe;