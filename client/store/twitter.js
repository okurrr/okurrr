import axios from 'axios'

const tweetsArray = []

const GET_TWEETS = 'GET_TWEETS'

const getTweets = tweets => ({type: GET_TWEETS, tweets})

export const fetchTweets = word => async dispatch => {
  try {
    const res = await axios.get(`/api/twitter/${word}`)
    dispatch(getTweets(res.data))
  } catch (error) {
    console.error(error)
  }
}

export default function(state = tweetsArray, action) {
  switch (action.type) {
    case GET_TWEETS:
      return action.tweets
    default:
      return state
  }
}
