import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var userSchema = new Schema({
   email: String,
   name: String,
   sex:  String,
   birthday: Date
});

export default mongoose.model('User', userSchema);
