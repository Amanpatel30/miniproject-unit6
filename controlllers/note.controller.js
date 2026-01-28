import Notes from '../models/note.model.js'
export const createNoteController = async (req,res)=>{
    try {
    const {title,content} = req.body;
    if(!title || !content) return res.status(400).json({Message:"All field should be given."})

    const createdNote = await Notes.create({
        title,
        content,
       userId:req.userId

    })
    res.status(201).json({
      success: true,
      message: 'Note created successfully',
      data: createdNote
    });

    } catch (error) {
    console.error('Create Note Error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Error creating note',
      error: error.message
    });
  }
    
}

export const getAllNotes = async (req,res) =>{
    try {
        const {noteId} = req.params;
        // console.log(noteId)
        if (!noteId || noteId==="undefined") {
            // console.log("w")
        const notes = await Notes.find({userId:req.userId})
        // console.log(notes)
        if (notes.length === 0) return res.json({Message:"User have no notes."})
        res.json(notes)
        
        }
        else{
            
            const note = await Notes.findOne({_id:noteId,userId:req.userId})
            if (!note) return res.json({Message:"User have no notes."})
            res.json(note);
        }
      
    } catch (error) {
        console.log(error)
    }
}