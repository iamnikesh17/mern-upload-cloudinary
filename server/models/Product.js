const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"]
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    image:{
        type:String,
        required:[true,"Image is required"]
    }
})

const Product=mongoose.model("Product",productSchema);

module.exports=Product;