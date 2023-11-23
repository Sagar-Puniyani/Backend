import mongoose from "mongose";

const userschema = new mongoose.Schema({

} ,
{
    timestamps : true
});

export const user = mongoose.model("User" , userschema)