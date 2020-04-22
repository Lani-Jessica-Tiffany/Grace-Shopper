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
module.exports = router

//Add Boba -ADMIN FUNCTION
// router.post('/', adminOnly, async (req, res, next) => {
//   try {
//     const {name, price, description, imageUrl} = req.body
//     await Boba.create(req.body)
//     const response = {
//       message: 'Boba Added!',
//       boba: {name, price, description, imageUrl}
//     }
//     res.json(response)
//   } catch (err) {
//     next(err)
//   }
// })

//Update Boba -ADMIN FUNCTION
// router.put('/:id', adminOnly, async (req, res, next) => {
//   try {
//     const {name, price, description, imageUrl} = req.body
//     await Boba.update(req.body, {
//       where: {id: req.params.id}
//     })
//     const response = {
//       message: 'Boba Updated!',
//       boba: {name, price, description, imageUrl}
//     }
//     res.json(response)
//   } catch (err) {
//     next(err)
//   }
// })

//Delete Boba -ADMIN FUNCTION
// router.delete('/:id', adminOnly, async (req, res, next) => {
//   try {
//     await Boba.destroy({
//       where: {id: req.params.id}
//     })
//     res.status(204).end()
//   } catch (err) {
//     next(err)
//   }
// })

//All Cart
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
    req.session.cart = cart
    res.json(req.session.cart)
  } catch (err) {
    next(err)
  }
})
