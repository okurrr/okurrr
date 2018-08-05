const router = require('express').Router()
const Twit = require('twit')
const config = require('./twitterConfig')

const T = new Twit(config)

// const params = {
//   q: 'finna',
//   count: 1,
//   lang: 'en',
//   result_type: 'mixed'
// }

// function gotData(err, data, response) {
//   const tweetsArr = []
//   if (err) {
//     console.log(err)
//   }
//   const tweets = data.statuses
//   console.log(tweets)
//   for (let i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].text)
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
      count: 10,
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
