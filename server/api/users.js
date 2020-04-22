const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//CHECKING ADMIN IS NOT WORKING YET
//check the user

//Single user - individual user and admin
router.get('/:id', async (req, res, next) => {
  try {
    const oneUser = await User.findByPk(req.params.id)
    res.json(oneUser)
  } catch (err) {
    next(err)
  }
})
// Add User -ADMIN Function (this might be problem to tackle later)

//Update User - individual user and admin
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await User.update(req.body, {
      where: {id: req.params.id}
    })
    res.json(updated)
  } catch (err) {
    next(err)
  }
})

//Delete - individual user and admin
router.delete('/:id', async (req, res, next) => {
  try {
    await User.destroy({
      where: {id: req.params.id}
    })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

// All users -ADMIN FUNCTION
router.get('/', adminOnly, async (req, res, next) => {
  console.log(req.user, 'USER')
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
