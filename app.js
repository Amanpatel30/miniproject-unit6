import express from 'express'
import authRoutes from './routes/auth.routes.js';
// import login from './routes/auth.routes.js'
const app = express();

app.get("/",(req,res)=>{
    return res.json({API_Info:{Routes:["/api/auth/register","/api/auth/login"]}})
});

app.use(express.json())
app.use("/api/auth",authRoutes);

export default app;