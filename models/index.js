const user = require('./user.model');
const category = require('./category.model')
const post = require('./post.model')
const model = {}
model.User = user;
model.Category = category;
model.Post = post;

module.exports = model;