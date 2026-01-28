import mongoose from "mongoose";

const commentModel = mongoose.Schema({
    text:{
        type:String,
        required:true,
        minLength:[3,"Comment text cannot be 3 character long."]
    }
    ,noteId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"notes",
        required:true
  },
   userId: {
    type: mongoose.Schema.Types.ObjectId,  // Special type for MongoDB IDs
    ref: 'users',                            // References the User model
    required: true                          // Every note must belong to a user
  }

},{
    timestamps:true
})

const Comments = mongoose.model("Comments",commentModel);
export default Comments;