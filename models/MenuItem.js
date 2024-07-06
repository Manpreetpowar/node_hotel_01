const mongoose = require('mongoose');

const menuItemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String
    },
    is_drink:{
        type:Boolean
    },
    ingredients:{
        type:String
    },
    num_sales:{
        type:Number
    }
})

const MenuItem = mongoose.model('Menu', menuItemSchema);
module.exports = MenuItem;