
import Users from '../models/User.model.js'
import bcrypt from 'bcrypt'

export const signupcontroller = async(req,res)=>{
    
    const {name,email,password} = req.body;
   
    if(!name | !email | !password) return res.json({success:false,Message:"All fields are required."})
    
    const userExits = await Users.findOne({email:email})
    
    if(userExits) return res.json({success:false,Message:"Email Already Exits."})

    const hashpassword = await bcrypt.hash(password,12);

    const user = await Users.create({
        name,
        email,
        password:hashpassword
    })
    if(user) return res.json({success:true,Message:"User Registerd."})
    
    res.json({success:false,Message:"Faild to register User."})
}