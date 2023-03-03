const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
},{timestamps: true, toJSON: { virtuals: true },
toObject: { virtuals: true }})

userSchema.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'user',
    justOne: false
  });

module.exports = mongoose.model('User', userSchema);