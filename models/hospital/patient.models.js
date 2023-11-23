import mongoose from "mongoose";

const patientschema  = new mongoose.Schema({
    
},
{
    timestamps : true
})

export const PatientSchema  = mongoose.model("Patientschema" , patientschema)