import axios from 'axios'

const songsArray = []

const GET_SONGS = 'GET_SONGS'

const getSongs = songs => ({type: GET_SONGS, songs})
console.log('hi')
export const fetchSongs = word => async dispatch => {
  try {
    const res = await axios.get(`/api/lyrics/${word}`)
    dispatch(getSongs(res.data))
  } catch (error) {
    console.error(error)
  }
}

export default function(state = songsArray, action) {
  switch (action.type) {
    case GET_SONGS:
      return action.songs
    default:
      return state
  }
}
