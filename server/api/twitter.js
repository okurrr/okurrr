const router = require('express').Router()
const Twit = require('twit')
const config = require('./twitterConfig')

if (process.env.NODE_ENV !== 'production') require('../../secrets')

const T = new Twit({
  consumer_key: process.env.KEY,
  consumer_secret: process.env.SECRET,
  access_token: process.env.ACCESSTOKEN,
  access_token_secret: process.env.ACCESSTOKENSECRET
})

// try {
//   var SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition
//   var recognition = new SpeechRecognition()
// } catch (e) {
//   console.error(e)
//   $('.no-browser-support').show()
//   $('.app').hide()
// }

// const params = {
//   q: 'finna',
//   count: 10,
//   lang: 'en',
//   result_type: 'mixed'
// }

// function gotData(err, data, response) {
//   const tweetsArr = []
//   if (err) {
//     console.log(err)
//   }
//   const tweets = data.statuses
//   // console.log(tweets)
//   for (let i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].created_at)
//     tweetsArr.push(tweets[i])
//   }
//   console.log(tweetsArr)
//   return tweetsArr
// }

// T.get('search/tweets', params, gotData)

router.get('/', async (req, res, next) => {
  try {
    const params = {
      q: 'finna',
      count: 5,
      lang: 'en',
      result_type: 'popular'
    }
    T.get('search/tweets', params, function gotData(err, data, response) {
      const tweetsArr = []
      if (err) {
        console.log(err)
      }
      const tweets = data.statuses
      for (let i = 0; i < tweets.length; i++) {
        tweetsArr.push({
          name: tweets[i].user.screen_name,
          text: tweets[i].text,
          time: tweets[i].created_at,
          followers: tweets[i].user.followers_count,
          location: tweets[i].user.location
        })
      }
      // console.log(tweets)
      res.json(tweetsArr)
    })
  } catch (err) {
    next(err)
  }
})

router.get('/:word', async (req, res, next) => {
  let search = req.params.word
  try {
    const params = {
      q: search,
      count: 100,
      lang: 'en',
      result_type: 'popular'
    }
    T.get('search/tweets', params, function gotData(err, data, response) {
      const tweetsArr = []
      if (err) {
        console.log(err)
      }
      const tweets = data.statuses
      for (let i = 0; i < tweets.length; i++) {
        tweetsArr.push({
          name: tweets[i].user.screen_name,
          text: tweets[i].text,
          time: tweets[i].created_at,
          followers: tweets[i].user.followers_count,
          location: tweets[i].user.location
        })
      }
      // console.log(tweetsArr)
      res.json(tweetsArr)
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
