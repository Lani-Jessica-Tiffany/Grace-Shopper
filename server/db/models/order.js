const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  purchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    min: 0
  }
})

module.exports = Order
