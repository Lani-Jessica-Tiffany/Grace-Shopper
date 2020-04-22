const Sequelize = require('sequelize')
const db = require('../db')

const Historial = db.define('historial', {
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.DECIMAL(5, 2)
  }
})

module.exports = Historial
