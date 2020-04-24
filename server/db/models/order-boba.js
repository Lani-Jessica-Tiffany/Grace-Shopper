const Sequelize = require('sequelize')
const db = require('../db')

const OrderBoba = db.define('orderBoba', {
  name: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://phoenix.org/wp-content/uploads/2018/07/Boba-Tea.jpg'
  }
})

module.exports = OrderBoba
