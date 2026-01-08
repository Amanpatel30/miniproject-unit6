import express from 'express'
import {signupcontroller} from '../controlllers/auth.controllers.js'
const router = express.Router();

router.post('/api/auth/register',signupcontroller)

export default router;