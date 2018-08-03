const router = require('express').Router()
const Twit = require('twit')
const config = require('./twitterConfig')
// console.log('twitter')

const T = new Twit(config)

// const params = {
//   q: 'finna',
//   count: 1,
//   lang: 'en',
//   result_type: 'mixed'
// }

// function gotData(err, data, response) {
// const tweetsArr = []
// if (err) {
// console.log(err)
// }
// const tweets = data.statuses
// console.log(tweets)
// for (let i = 0; i < tweets.length; i++) {
// console.log(tweets[i].text)
// tweetsArr.push(tweets[i])
// }
// console.log(tweetsArr)
// return tweetsArr
// }

// T.get('search/tweets', params, gotData)

router.get('/', async (req, res, next) => {
  try {
    const params = {
      q: 'finna',
      count: 10,
      lang: 'en',
      result_type: 'mixed'
    }
    T.get('search/tweets', params, function gotData(err, data, response) {
      const tweetsArr = []
      if (err) {
        console.log(err)
      }
      const tweets = data.statuses
      for (let i = 0; i < tweets.length; i++) {
        tweetsArr.push(tweets[i].text)
      }
      // console.log(tweetsArr)
      res.json(tweetsArr)
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
