import React, {Component} from 'react'
import {fetchTweets} from '../store/twitter'
import {fetchWord} from '../store/list'
import {fetchSongs} from '../store/genius'
import {connect} from 'react-redux'
import TwitterSection from './twitterSection'
import SongSection from './songSection'
import List from './list'
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
      <div className="ui grid parent">
        <div className="seven wide column scroll">
          <List />
        </div>

        <div className="nine wide column scroll">
          <div className="ui grid">
            <div id="page">
              <span className="wordPage">{word.name} </span>
              <span className="wordPageDef"> {word.description} </span>
            </div>
          </div>
          <div className="ui grid">
            <TwitterSection tweets={tweets} />
          </div>
          <div className="ui grid">
            <SongSection songs={songs} />
          </div>
        </div>
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
