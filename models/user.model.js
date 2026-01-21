import mongoose from "mongoose";

const usermodel = mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        required:true,
         trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
});


const Users = mongoose.model('Users',usermodel)

export default Users;