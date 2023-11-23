import mongoose from "mongoose";

const productschema  = new mongoose.Schema({
    productname : {
        type : String,
        required : true,
        unique : true
    },
    description :{
        type : String,
        required : true,
        lowercase : true
    },
    price : {
        type : Number,
        required : true,
        default : 0
    },
    stock : {
        type : Number,
        required : true,
        default : 0
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    Category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required : true
    }
} ,
{
    timestamps : true
})

export const Product = mongoose.model("Product" , productschema)