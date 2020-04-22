const Sequelize = require('sequelize')
const db = require('../db')

const Historial = db.define('historial', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Historial
