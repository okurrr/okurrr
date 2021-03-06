const router = require('express').Router()
module.exports = router

router.use('/twitter', require('./twitter'))
router.use('/words', require('./words'))
router.use('/lyrics', require('./genius'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
