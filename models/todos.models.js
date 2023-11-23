import moongoose from moongoose

const todoschema = new moongoose.Schema({
    content : {
        type : String,
        required : true,
    },
    complete : {
        type : String,
        required : true,
        default : false
    },
    createdby : {
        type : moongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    subtodo : [
        {
            type : moongoose.Schema.Types.ObjectId,
            ref : "SubTodo"
        }
    ]// Array of sub Todos 
},
{
    timestamps : true 
})

export const Todo = moongoose.model("Todo" , todoschema)