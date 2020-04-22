const Sequelize = require('sequelize')
const db = require('../db')

const Boba = db.define('boba', {
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL(5, 2)
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://phoenix.org/wp-content/uploads/2018/07/Boba-Tea.jpg'
  }
})

module.exports = Boba
