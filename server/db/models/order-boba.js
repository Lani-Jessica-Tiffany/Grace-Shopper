const Sequelize = require('sequelize')
const db = require('../db')

const OrderBoba = db.define('orderBoba', {
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderBoba
