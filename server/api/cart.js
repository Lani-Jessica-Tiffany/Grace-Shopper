/*
README for Postman
Guest experience
- dummy data is set up so that you simply need to get/put/post to http://localhost:8080/api/cart
  with an empty body
User experience
- need Jess's help for that; used Chrome as a hack for now... VVVV
README for Chrome
User experience (Logged In)
- Log in with whoever has userId = 1 in your database since its the best seeded for all tables
- Note that login with userId = 1 may change when you reseed your database
*/

// const
const router = require('express').Router()
const {Order, OrderBoba, Boba} = require('../db/models')
module.exports = router

//GET api/cart
// access route by clicking on cart icon
router.get('/', async (req, res, next) => {
  try {
    // user experience
    if (req.user) {
      // find or create user's unpurchased order
      const [order] = await Order.findOrCreate({
        where: {
          userId: req.user.id,
          status: false
        },
        include: [{model: Boba}]
      })
      res.json(order)
    } else {
      // guest experience
      //  initialize cart if it does not exist
      if (!req.session.cart) req.session.cart = []
      res.json(req.session.cart)
    }
  } catch (err) {
    next(err)
  }
})

//POST api/cart
//access route by clicking 'Add to Cart' button on single item page
router.post('/', async (req, res, next) => {
  try {
    // fake data (for now)
    /* req.body = {
      bobaId: 3,
      name: 'Almond Milk Tea',
      price: 300,
      quantity: 2,
      imageUrl:
        'https://chloejohnston.com/wp-content/uploads/2019/07/mango-slush-bubble.png'
    } */
    const itemFromDb = await Boba.findByPk(req.body.bobaId)
    const {name, price, imageUrl} = itemFromDb
    const {bobaId, quantity} = req.body
    //user experience
    if (req.user) {
      /*
      - find or create user's unpurchased order
      - user's order is not known when user clicks 'Add x quantity to cart'
      - now there are two ways to find user's order (get and post)
      */
      const [order] = await Order.findOrCreate({
        where: {
          userId: req.user.id,
          status: false
        }
      })
      const orderId = order.id
      // find or create item tied to order
      const [item, itemCreated] = await OrderBoba.findOrCreate({
        where: {
          orderId,
          bobaId
        },
        /*
        - if item is created, use fields from req.body
        - assume orderId and bobaId fields will be auto-created
        */
        defaults: {
          name,
          price,
          quantity,
          imageUrl
        }
      })
      // if item already exists, then update item quantity
      if (!itemCreated) item.quantity += quantity
      res.json(item)
    } else {
      // guest experience
      //  initialize cart if it does not exist
      if (!req.session.cart) req.session.cart = []
      let cart = req.session.cart
      // find item with same bobaId as req.body
      const findItem = cart.find(item => item.bobaId === bobaId)
      // if item already exists, then update item quantity
      if (findItem) {
        findItem.quantity += quantity
        findItem.save()
      } else
        // else add item to cart
        cart.push(req.body)
      res.json(findItem || req.body)
    }
  } catch (err) {
    next(err)
  }
})

//PUT api/cart
// access route by clicking item's 'Update Quantity' button on cart page
router.put('/', async (req, res, next) => {
  try {
    // fake data (for now)
    req.body = {
      bobaId: 3,
      orderId: 1, //access to order is available b/c on cart page
      name: 'Almond Milk Tea',
      price: 300,
      quantity: 2,
      imageUrl:
        'https://chloejohnston.com/wp-content/uploads/2019/07/mango-slush-bubble.png'
    }
    const {bobaId, orderId, quantity} = req.body

    //user experience
    if (req.user) {
      let item = await OrderBoba.findOne({
        where: {
          orderId,
          bobaId
        }
      })
      //update quantity
      item.quantity = quantity
      item = await item.save() //not sure if you need in order to save in database
      res.json(item)
    } else {
      // is there a way to directly send item to update over to avoid cart.find method?
      // guest experience
      let cart = req.session.cart
      // find item with same bobaId as req.body
      const findItem = cart.find(item => item.bobaId === bobaId)
      //update quantity
      findItem.quantity = quantity
      res.json(findItem)
    }
  } catch (err) {
    next(err)
  }
})

//DELETE boba from the cart api/cart
router.delete('/', async (req, res, next) => {
  try {
    //find the order
    const {bobaId, orderId} = req.body
    //user experience
    if (req.user) {
      // delete item tied to order
      const item = await OrderBoba.destroy({
        where: {
          orderId,
          bobaId
        }
      })
      //respond with status
      res.status(204).send()
    } else if (req.session.cart) {
      // guest experience
      //  initialize cart if it does not exist
      let cart = req.session.cart
      // find item with same bobaId as req.body
      const findItem = cart.find(item => item.bobaId === bobaId)
      if (findItem) {
        findItem.delete()
        res.json(findItem)
      } else {
        // else not found
        res.json(findItem || req.body)
      }
    }
  } catch (err) {
    next(err)
  }
})

// DELETE api/cart/:orderId
router.delete('/:orderId', async (req, res, next) => {
  try {
    await OrderBoba.destroy({
      where: {
        orderId: req.params.orderId
      }
    })
    res.status(204).send()
  } catch (err) {
    next(err)
  }
})
