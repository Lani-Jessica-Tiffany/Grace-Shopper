const Sequelize = require('sequelize');
const db = require('../db');

const Boba = db.define('boba', {
  name: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.FLOAT,
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://phoenix.org/wp-content/uploads/2018/07/Boba-Tea.jpg',
  },
  quantity: {
    type: Sequelize.INTEGER,
    min: 0,
  }
})

module.exports = Boba;
