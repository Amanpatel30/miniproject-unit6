import express from 'express'
import authRoutes from './routes/auth.routes.js';
import noteroute from './routes/note.route.js'
import commentRoute from './routes/comment.route.js'
const app = express();

app.get("/",(req,res)=>{
    return res.json({API_Info:{Routes:["/api/auth/register","/api/auth/login"]}})
});

app.use(express.json())
app.use("/api/auth",authRoutes);
app.use(noteroute);
app.use(commentRoute);

export default app;