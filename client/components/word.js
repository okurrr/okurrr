import React, {Component} from 'react'
import {fetchTweets} from '../store/twitter'
import {fetchWord} from '../store/list'
import {fetchSongs} from '../store/genius'
import {connect} from 'react-redux'
import TwitterSection from './twitterSection'
import SongSection from './songSection'
import {withRouter} from 'react-router-dom'

class Word extends Component {
  componentDidMount() {
    const word = this.props.match.url.slice(6)
    this.props.getTweets(word)
    this.props.getWord(word)
    this.props.getSongs(word)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url) {
      const word = this.props.match.url.slice(6)

      this.props.getTweets(word)
      this.props.getWord(word)
      this.props.getSongs(word)
    }
  }

  render() {
    const word = this.props.list.word
    const tweets = this.props.tweets
    const songs = this.props.songs

    return (
      <div className="ui grid">
        {/* <div className="row" /> */}
        <div className="sixteen wide column" id="page">
          <div className="eight wide column">
            <span className="wordPage">{word.name} </span>
            <span className="wordPageDef"> {word.description} </span>
          </div>
        </div>

        <TwitterSection tweets={tweets} />
        {/* <div className="row" /> */}
        <SongSection songs={songs} />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => ({
  tweets: state.twitter,
  list: state.list,
  songs: state.genius
})

const mapDispatchToProps = dispatch => ({
  getTweets: word => dispatch(fetchTweets(word)),
  getWord: word => dispatch(fetchWord(word)),
  getSongs: word => dispatch(fetchSongs(word))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Word))
