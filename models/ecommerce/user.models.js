import mongoose from "mongose";

const userschema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
    }
} ,
{
    timestamps : true
});

export const user = mongoose.model("User" , userschema)