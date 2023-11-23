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
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
} ,
{
    timestamps : true
})

export const Product = mongoose.model("Category" , productschema)