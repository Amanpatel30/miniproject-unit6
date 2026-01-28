import mongoose from "mongoose";

const noteModel = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Note title is required'],
        trim: true,
        maxlength: [100, 'Title cannot exceed 100 characters']
  },
    content: {
    type: String,
    required: [true, 'Note content is required'],
    trim: true,
    maxlength: [5000, 'Content cannot exceed 5000 characters']
  },
   userId: {
    type: mongoose.Schema.Types.ObjectId,  // Special type for MongoDB IDs
    ref: 'users',                            // References the User model
    required: true                          // Every note must belong to a user
  }

},{
    timestamps:true
})

const Notes = mongoose.model("Notes",noteModel);
export default Notes;