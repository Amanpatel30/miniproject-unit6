import express from 'express'
import signup from './routes/auth.routes.js';
const app = express()


app.use(express.json())
app.use(signup);

export default app;