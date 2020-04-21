const router = require('express').Router()
const {User} = require('../db/models')
const {Boba} = require('../db/models')
module.exports = router

// do we need to add and http error middleware?

// find admin users
const adminOnly = (req, res, next) => {
  if (!req.sessions.user.isAdmin) {
    const err = new Error('Not Allowed')
    err.status = 401
    return next(err)
  }
  next()
}

//Add Boba -ADMIN FUNCTION
router.post('/', async (req, res, next) => {
  try {
    const newBoba = await Boba.create(req.body)
    const response = {
      message: 'Boba Added!',
      boba: newBoba.datavalues
    }
    res.json(response)
  } catch (err) {
    next(err)
  }
})

//Update Boba -ADMIN FUNCTION
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await Boba.update(req.body, {where: {id: req.params.id}})
    res.json(updated)
  } catch (err) {
    next(err)
  }
})

//Delete Boba -ADMIN FUNCTION
router.delete('/:id', async (req, res, next) => {
  try {
    const deleteBoba = await Boba.findByPk(req.params.id)
    Boba.destroy(deleteBoba)
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
