const mongoose=require('mongoose')
const form=new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:String,
    },
    email:{
        type:String,
    },
    contact:{
        type:String,
    },
    dob:{
        type:String,
    },
    gender:{
        type:String,
    },
    department:{
        type:String,
    },
    university:{
        type:String,
    },

})

let model=mongoose.model("Users",form)
module.exports=model;