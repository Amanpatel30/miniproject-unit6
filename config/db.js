import mongoose from 'mongoose'

const connectDB = async ()=>{
try{
  const conn = await mongoose.connect(process.env.MONGO_URL);
  console.log(`Mongodb Connected`)

}
catch(error){
    console.log(error);
    process.exit(0);
}
}


export default connectDB;
