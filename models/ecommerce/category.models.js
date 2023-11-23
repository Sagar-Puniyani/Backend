import mongoose from "mongoose";

const Categoryschema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true
    }
} ,
{
    timestamps : true
});

export const category = mongoose.model("Category" , Categoryschema)