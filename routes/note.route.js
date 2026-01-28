import express from 'express'
import {verifyToken} from '../controlllers/auth.controllers.js'
import {createNoteController,getAllNotes} from '../controlllers/note.controller.js'
const router = express.Router();

router.get("/api/notes/{:noteId}",verifyToken,getAllNotes);
router.post("/api/notes",verifyToken,createNoteController)

export default router;