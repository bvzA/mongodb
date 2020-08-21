import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var commentSchema = new Schema({
   author: String,
   text:  String,
   timestamp: Date,
   users_like: [],
   users_dislike: []
});

export default mongoose.model('Comment', commentSchema);
