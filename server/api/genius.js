const router = require('express').Router()
const utils = require('./serverUtils')
const axios = require('axios')
console.log('musixmatch')

const base = 'http://api.musixmatch.com/ws/1.1/'
const apikey = '8523aa37ef71c0b05379e370d2daf119'

router.get('/', (request, response) => {
  const id = request.query.id

  const url = `${base}track.lyrics.get?apikey=${apikey}&track_id=1`

  axios(url)
    .then(utils.checkStatus)
    .then(res => {
      response.json(res.data.message.body.lyrics)
    })
    .catch(error => {
      console.log('Error in /lyrics', error, error.status, error.statusText)
      response.json({
        status: error.status,
        statusText: error.statusText
      })
    })
})

// router.get('/', async (req, res, next) => {
//   try {
//     const params = {
//       q: 'finna',
//       count: 10,
//       lang: 'en',
//       result_type: 'mixed'
//     }
//     T.get('search/tweets', params, function gotData(err, data, response) {
//       const tweetsArr = []
//       if (err) {
//         console.log(err)
//       }
//       const tweets = data.statuses
//       for (let i = 0; i < tweets.length; i++) {
//         tweetsArr.push(tweets[i].text)
//       }
//       // console.log(tweetsArr)
//       res.json(tweetsArr)
//     })
//   } catch (err) {
//     next(err)
//   }
// })

module.exports = router
