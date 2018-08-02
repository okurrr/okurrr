const router = require('express').Router()
const {Word} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const words = await Word.findAll({})
    res.json(words)
  } catch (err) {
    next(err)
  }
})
