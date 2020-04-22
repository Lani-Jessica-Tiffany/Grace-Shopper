const Sequelize = require('sequelize')
const db = require('../db')

const Historial = db.define('historial', {
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.FLOAT
  }
})

module.exports = Historial
