const Sequelize = require('sequelize')
const db = require('../db')

const Vote = db.define('vote', {
  word: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  value: {
    type: Sequelize.INTEGER
  }
})

module.exports = Vote
