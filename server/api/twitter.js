const router = require('express').Router()
const Twit = require('twit')
const config = require('./twitterConfig')
console.log('twitter')

const T = new Twit(config)

const params = {
  q: 'finna',
  count: 10,
  lang: 'en',
  result_type: 'mixed'
}

T.get('search/tweets', params, gotData)

function gotData(err, data, response) {
  if (err) {
    console.log(err)
  }
  const tweets = data.statuses
  for (let i = 0; i < tweets.length; i++) console.log(tweets[i].text)
}

module.exports = router
