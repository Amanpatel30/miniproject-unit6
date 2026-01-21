import Users from '../models/User.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

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
    
    res.satus(201).json({success:false,Message:"Faild to register User."})
}

export const logincontroller = async (req,res)=>{
    try {
    // STEP 1: EXTRACT CREDENTIALS
    const { email, password } = req.body;

    // INPUT VALIDATION:
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    // STEP 2: FIND USER BY EMAIL
    // Check if user exists in database
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
      // SECURITY NOTE:
      // We don't specify whether email or password is wrong
      // This prevents attackers from knowing which accounts exist
    }
     const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }
     const token = jwt.sign(
      { id: user._id },              // Payload: data to encode in token
      process.env.JWT_SECRET,        // Secret: used to sign the token
      { expiresIn: '24h' }           // Options: token expires in 24 hours
    );

    
    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,  // Client must save this token and send it with future requests
      data: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

}
    catch (error) {
    console.error('Login Error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Server error during login',
      error: error.message
    });
  }
};

