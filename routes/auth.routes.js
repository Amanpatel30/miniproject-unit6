import express from 'express'
import {signupcontroller} from '../controlllers/auth.controllers.js'
import {logincontroller} from '../controlllers/auth.controllers.js';
const router = express.Router();

router.post('/register',signupcontroller);
router.post('/login',logincontroller);

export default router;