const verifyToken = require('./JwtAuth');
const checkDuplicateUsernameOrEmail = require('./verifySignUp');
module.exports = {
  verifyToken,
  checkDuplicateUsernameOrEmail
};
