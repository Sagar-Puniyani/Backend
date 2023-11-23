import mongoose from "mongoose";

const orderItemScehma  = new mongoose.Schema({
    productID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    quantity : {
        type : Number,
        required : true
    }
})

const Orderschema = new mongoose.Schema({
    orderprice : {
        type : Number,
        required : true,
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    orderItems : {
        type : [orderItemScehma]
    },
    address : {
        type : String,
        required : true
    },
    state : {
        type : String,
        enum : ["PENDING" , "CANCELLED" , "DELIVERED"],
        default : "PENDING",
        required : true
    }
}, 
{
    timestamps : true
})

export const order = mongoose.model("Order" , Orderschema)