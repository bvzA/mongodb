import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var postSchema = new Schema({
   author: String,
   text:  String,
   timestamp: Date,
   users_like: [],
   users_dislike: [],
   comments: []
});

export default mongoose.model('Post', postSchema);
