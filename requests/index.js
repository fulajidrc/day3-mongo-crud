const userRequest = require('./user.request')
const categoryRequest = require('./category.request')
const postRequest = require('./post.request')

const request = {}
request.userRequest = userRequest;
request.categoryRequest = categoryRequest;
request.postRequest = postRequest;

module.exports = request;