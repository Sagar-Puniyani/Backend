import mongoose from "mongoose";

const hostpitalschema  = new mongoose.Schema({

},
{
    timestamps : true
})

export const HospitalModel = mongoose.model("HospitalModel" , hostpitalschema)