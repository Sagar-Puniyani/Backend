import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({

},
{
    timestamps : true
})

export const medicalrecord = mongoose.model("MedicalRecord" , medicalRecordSchema)