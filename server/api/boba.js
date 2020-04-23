const router = require('express').Router()
const {User} = require('../db/models')
const {Boba} = require('../db/models')
module.exports = router

// check if admin
const adminOnly = (req, res, next) => {
  if (!req.user.isAdmin) {
    const err = new Error('Not Allowed')
    err.status = 401
    return next(err)
  }
  next()
}

//Add Boba -ADMIN FUNCTION
router.post('/', adminOnly, async (req, res, next) => {
  try {
    const {name, price, description, imageUrl} = req.body
    await Boba.create(req.body)
    const response = {
      message: 'Boba Added!',
      boba: {name, price, description, imageUrl}
    }
    res.json(response)
  } catch (err) {
    next(err)
  }
})

//Update Boba -ADMIN FUNCTION
router.put('/:id', adminOnly, async (req, res, next) => {
  try {
    const {name, price, description, imageUrl} = req.body
    await Boba.update(req.body, {
      where: {id: req.params.id}
    })
    const response = {
      message: 'Boba Updated!',
      boba: {name, price, description, imageUrl}
    }
    res.json(response)
  } catch (err) {
    next(err)
  }
})

//Delete Boba -ADMIN FUNCTION
router.delete('/:id', adminOnly, async (req, res, next) => {
  try {
    await Boba.destroy({
      where: {id: req.params.id}
    })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

// Single View Boba
router.get('/:id', async (req, res, next) => {
  try {
    const oneBoba = await Boba.findByPk(req.params.id)
    res.json(oneBoba)
  } catch (err) {
    next(err)
  }
})

//All Boba
router.get('/', async (req, res, next) => {
  try {
    const allBoba = await Boba.findAll()
    res.json(allBoba)
  } catch (err) {
    next(err)
  }
})
