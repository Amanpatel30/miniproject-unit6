import express from 'express'
import {verifyToken} from '../controlllers/auth.controllers.js'
import {createCommentController} from "../controlllers/comment.controller.js"
const router = express.Router();


router.post("/comment/:noteId",verifyToken,createCommentController);

export default router;