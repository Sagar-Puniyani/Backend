import moongoose from moongoose

const userschema = new moongoose.Schema({
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
    status : {
        type : Boolean
    },
    password : {
        type : String,
        required : [true , "Password is required "]
    },
    },
    {
        timestamps : true 
    }
)

export const  Userschema = moongoose.model("User" , userschema)