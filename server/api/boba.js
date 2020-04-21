const router = require('express').Router()
const {Boba} = require('../db/models')
module.exports = router

// do we need to add and http error middleware?

//find user
  //router.params?

// find admin users
/* const adminOnly = (req, res, next) => {

} */


//Add Boba
// I think this will be on a different page
router.post('/', adminOnly, async (req, res, next) => {
  try{
    const newBoba = await Boba.create(req.body)
    const response =
      { message: 'Boba Added!',
        boba: newBoba.datavalues }
    res.json(response)
  } catch (err){
    next(err)
  }
})

//Update Boba
router.put('/:id', adminOnly, async (req, res, next) => {
  try {
    const updated = await Boba.update(req.body, { where: {id: req.params.id}})
    res.json(updated)
  } catch (err) {
    next (err)
  }
})

//Delete Boba
router.destroy('/:id', adminOnly, async (req, res, next) => {
  try {
    const deleteBoba = await Boba.findByPk(req.params.id)
    Boba.destroy(deleteBoba)
    res.status(204).end()
  } catch (err){
    next(err)
  }
})

// Single View Boba
router.get('/:id', async (req, res, next) => {
  try{
    const oneBoba = await Boba.findByPk(req.params.id)
    res.json(oneBoba)
  } catch (err){
    next(err)
  }
})

//All Boba
router.get('/', async (req, res, next) => {
  try{
    const allBoba = await Boba.findAll()
    res.json(allBoba)
  } catch (err){
    next(err)
  }
})


