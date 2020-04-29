// require + exports
const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

// middleware
const adminOnly = (req, res, next) => {
  if (!req.user.isAdmin) {
    const err = new Error('Not Allowed')
    err.status = 401
    return next(err)
  }
  next()
}

// routes /api/users
// GET ALL (ADMIN)
router.get('/', adminOnly, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'firstName', 'lastName']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//CHECKING ADMIN IS NOT WORKING YET
//check the user
/* router.param('id', async (req, res, next, id) => {
  try {
    const user = await User.findById(id)
    req.requestedUser = user
    if(!user){
      const err = new Error('Thats not you')
      err.status = 401
      return next(err)
    }
  } catch (err){
    next()
  }
}) */

// check if admin users
/* const adminOnly = (req, res, next) => {
  if (!req.user.isAdmin) {
    const err = new Error('Not Allowed')
    err.status = 401
    return next(err)
  }
  next()
} */

//Single user - individual user and admin
router.get('/:id', adminOnly, async (req, res, next) => {
  try {
    const oneUser = await User.findByPk(req.params.id)
    res.json(oneUser)
  } catch (err) {
    next(err)
  }
})
// Add User -ADMIN Function (this might be problem to tackle later)

//Update User - individual user and admin
router.put('/:id', adminOnly, async (req, res, next) => {
  try {
    await User.update(req.body, {
      where: {id: req.params.id}
    })
    res.json(res.body)
  } catch (err) {
    next(err)
  }
})

//Delete - individual user and admin
router.delete('/:id', adminOnly, async (req, res, next) => {
  try {
    await User.destroy({
      where: {id: req.params.id}
    })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})
