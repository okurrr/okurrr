const User = require('./user')
const Word = require('./word')
const Vote = require('./vote')

Vote.belongsTo(User)
User.hasMany(Vote)

module.exports = {
  User,
  Word,
  Vote
}
