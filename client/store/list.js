import axios from 'axios'

const wordsArray = []

const GET_WORDS = 'GET_WORDS'

const getWords = words => ({type: GET_WORDS, words})

export const fetchWords = () => async dispatch => {
  try {
    const res = await axios.get(`api/words`)
    console.log(res)
    dispatch(getWords(res.data))
  } catch (error) {
    console.error(error)
  }
}

export default function(state = wordsArray, action) {
  switch (action.type) {
    case GET_WORDS:
      return action.words
    default:
      return state
  }
}
