const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    title: String,
    description: String
},{timestamps: true, toJSON: { virtuals: true },
toObject: { virtuals: true } })

categorySchema.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'category',
    justOne: false
  });

module.exports = mongoose.model('Category', categorySchema);