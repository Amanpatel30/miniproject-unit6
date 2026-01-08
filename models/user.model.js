import mongoose from "mongoose";

const usermodel = mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
});


const Users = mongoose.model('Users',usermodel)

export default Users;