import axios from 'axios'

const wordsObj = {
  words: [],
  word: {}
}

const GET_WORDS = 'GET_WORDS'
const GET_WORD = 'GET_WORD'

const getWords = words => ({type: GET_WORDS, words})
const getWord = word => ({type: GET_WORD, word})

export const fetchWords = () => async dispatch => {
  try {
    const res = await axios.get(`/api/words`)
    dispatch(getWords(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchWord = word => async dispatch => {
  try {
    const res = await axios.get(`/api/words/${word}`)
    dispatch(getWord(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const createWord = word => async dispatch => {
  try {
    const res = await axios.post(`/api/words`, word)
    return dispatch(getWord(res.data))
  } catch (error) {
    console.error(error)
  }
}

export default function(state = wordsObj, action) {
  switch (action.type) {
    case GET_WORDS:
      return {...state, words: action.words}
    case GET_WORD:
      return {...state, word: action.word}
    default:
      return state
  }
}
