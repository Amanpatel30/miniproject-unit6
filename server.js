import app from './app.js'
import 'dotenv/config'
import mongoose from 'mongoose'










app.listen(process.env.PORT,
    console.log(`Server is running on port ${process.env.PORT}`)
)

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log(`Mongodb Connected`)
})