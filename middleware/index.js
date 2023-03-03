const validate = require('./validate.middleware')
const auth = require('./auth.middleware')
const middleware = {}

middleware.validate = validate
middleware.auth = auth;

module.exports = middleware;