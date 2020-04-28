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
      let [order] = await Order.findOrCreate({
        where: {
          userId: req.user.id,
          status: false
        },
        include: [{model: Boba}]
      })

      // store orderId info for other reqs (e.g. delete)
      req.session.orderId = order.id
      res.json(order)
    } else {
      // guest experience
      //  initialize cart if it does not exist
      const cart = req.session.cart ? req.session.cart : []
      res.json({bobas: cart})
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
      if (!itemCreated) {
        //update quantity
        await item.update({
          quantity: item.quantity + quantity
        })
        res.json(item)
      }
    } else {
      // guest experience
      //  initialize cart if it does not exist
      if (!req.session.cart) req.session.cart = []
      let cart = req.session.cart
      // find item with same bobaId as req.body
      const findItem = cart.find(item => item.id === bobaId)
      // if item already exists, then update item quantity
      if (findItem) {
        findItem.quantity += quantity
        res.json(findItem)
      } else {
        // else add item to cart
        const info = {
          id: bobaId,
          name,
          price,
          quantity,
          imageUrl
        }
        cart.push(info)
        res.json(info)
      }
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

//PUT For CHECKOUT
router.put('/checkout', async (req, res, next) => {
  try {
    const {orderId} = req.body
    //user experience
    if (req.user) {
      const orderUp = await Order.findByPk(orderId)
      console.log(orderUp)
      await orderUp.update({
        status: true
      })
      res.json(orderUp)
    } else {
      //let cart = req.session.cart
      const order = await Order.findOrCreate({
        where: {
          userId: req.session.id,
          status: true
        }
      })
      //const orderId = order.id
      // find or create item tied to order
      // const [item, itemCreated] = await OrderBoba.findOrCreate({
      //   where: {
      //     orderId,
      //     bobaId
      //   },
      //   defaults: {
      //     name,
      //     price,
      //     quantity,
      //     imageUrl
      //   }
      // })
      res.json(order)
    }
  } catch (err) {
    next(err)
  }
})
//DELETE boba from the cart api/cart
router.delete('/:bobaId', async (req, res, next) => {
  try {
    //user experience
    if (req.user) {
      // delete item tied to order
      await OrderBoba.destroy({
        where: {
          orderId: req.session.orderId,
          bobaId: req.params.bobaId
        }
      })
      const order = await Order.findAll({
        where: {
          id: req.session.orderId
        },
        include: [{model: Boba}]
      })
      //respond with status
      res.status(200).json(order[0])
    } else {
      // guest experience - i.e. no req.user
      // cart already exists if you can access delete route
      let cart = req.session.cart
      let removedItem
      // remove selected boba item from cart
      const remove = item => {
        console.log('itemid', item.id)
        console.log('paramss', req.params.bobaId)
        if (item.id === req.params.bobaId) {
          cart.slice(cart.indexOf(item), 1)
          removedItem = item
        }
      }
      cart.forEach(remove)
      console.log('removedItem', removedItem)
      res.send(removedItem)
    }
  } catch (err) {
    next(err)
  }
})
