import mongoose from 'mongoose'

const doctorschema = new mongoose.Schema({

} ,
{
    timestamps : true
});


export const DoctorModel = mongoose.model("DoctorModel" , doctorschema);