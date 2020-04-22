const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/boba', require('./boba'))
router.use('/order-boba', require('./order-boba'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
