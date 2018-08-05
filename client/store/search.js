const search = []

const SEARCH_WORD = 'SEARCH_WORD'

export const searchWord = word => ({type: SEARCH_WORD, word})

export default function(state = search, action) {
  switch (action.type) {
    case SEARCH_WORD:
      return action.word
    default:
      return state
  }
}
