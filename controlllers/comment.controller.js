import Comments from '../models/comments.model.js'

export const createCommentController = async (req,res)=>{
    const {text} = req.body;
    const {noteId} = req.params;
    // res.send(text)
    if (!text) return res.json({Message:"Comment text not provided."})

        const createdComment = await Comments.create({
            text,
            noteId:noteId,
            userId:req.userId
        })

        if (!createdComment) return res.json({messsage:"Comment not created."})


            res.json({Message:"User commented on noteID:"+noteId})

}

