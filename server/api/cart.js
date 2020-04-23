/*
new guest/client - done
assign new session - done (expression-session)
--only store cart in database if logged in
store cart in req.session.cart as array of objects
[
  {
    boba id,
    quantity,
    price
  }
 ,
   {
    boba id,
    quantity,
    price
  }
]
client makes get request to cart
render req.session.cart
*/

// const
const router = require('express').Router()
// const {Boba, Order, OrderBoba} = require('../db/models')
module.exports = router

// Display all item(s) or none in cart
router.get('/', (req, res, next) => {
  try {
    const cart = [
      {
        id: 1,
        name: 'Almond Milk Tea',
        price: 5,
        quantity: 4,
        imageUrl:
          'https://chloejohnston.com/wp-content/uploads/2019/07/mango-slush-bubble.png'
      },
      {
        id: 2,
        name: 'Oolong Milk Tea',
        price: 3,
        quantity: 4,
        imageUrl:
          'https://chloejohnston.com/wp-content/uploads/2019/07/mango-slush-bubble.png'
      }
    ]
    if (!req.session.cart) {
      req.session.cart = {}
    }
    req.session.cart = cart
    res.json(req.session.cart)
  } catch (err) {
    next(err)
  }
})

// Add items to cart
router.post('/', async (req, res, next) => {
  try {
    /*
    grab boba id from req.params.id
    data = grab boba obj from boba database
    data.quantity = need to think about how to grab the quantity
    if(!req.session.cart.id) req.session.cart = data
    else req.session.cart.id.quantity += data.quantity
    */
  } catch (err) {
    next(err)
  }
})

// Edit items in cart - /cart/:order/:boba
// router.put('/:order', async (req, res, next) => {
//   try {

//   } catch (err) {
//     next(err);
//   }
// })

// Delete items in cart - /cart/:order
// router.delete('/:order', (req, res, next) => {
//   try {

//   } catch (err) {
//     next(err);
//   }
// })
