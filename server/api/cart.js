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
const {Boba, Order, OrderBoba} = require('../db/models')
module.exports = router

// Display all item(s) or none in cart
router.get('/', async (req, res, next) => {
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

    // const cart = await OrderBoba.findOne({
    //   where: {
    //     bobaId: bobaId,

    //   }
    // })

    if (!req.session.cart) {
      req.session.cart = []
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
    if (req.user) {
      let orderBoba = await OrderBoba.findOrCreate({
        where: {
          bobaId: req.body.bobaId,
          orderId: req.body.orderId
        },
        defaults: {
          quantity: req.body.quantity
        }
      })

      //1 ) first see if there is unpurchsaed cart,find or create it
      let [order] = await Order.findOrCreate({
        where: {
          userId: req.user.id,
          status: false
        }
      })

      //get the orderId
      let orderId = order.id

      //find or create specific item in cart
      const [item, wasCreated] = await OrderBoba.findOrCreate({
        where: {
          orderId: orderId,
          bobaId: req.body.bobaId
        },
        default: {
          quantity: req.body.quantity //dont know syntax for def
        }
      })

      let currentQuantity = item.quantity

      //if cart exists, then update the quantity of the item as current quantity + added quantity
      if (!wasCreated)
        await OrderBoba.update(
          {
            quantity: currentQuantity + req.body.quantity
          },
          {
            where: {
              orderId: orderId,
              bobaId: req.body.bobaId
            }
          }
        )

      //writingo ut my thoughts
      /*
      if current item in cart exists, then update quantity
      if does not exist, cr
      is there a sequelize method that tells me whethe something exists or not
      so just need this above
      */
      console.log('BOOOOOOBA', orderBoba)
      res.json(orderBoba)
    }
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

// Delete items in cart
router.delete('/', async (req, res, next) => {
  try {
    // user authentication
    if (req.user) {
      // find an item in the cart
      const findItem = req.session.cart.find(
        item => item.bobaId === req.body.bobaId
      )
      // remove item from
      await findItem.destroy({
        where: {
          bobaId: req.body.bobaId
        }
      })
    }
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})
