const router = require('express').Router()
const {Word} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const words = await Word.findAll({order: [['name']]})
    res.json(words)
  } catch (err) {
    next(err)
  }
})

router.get('/:word', async (req, res, next) => {
  try {
    const word = await Word.findOne({where: {name: req.params.word}})
    res.json(word)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newWord = await Word.create(req.body)
    res.json(newWord)
  } catch (err) {
    next(err)
  }
})
