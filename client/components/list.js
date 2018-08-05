import React, {Component} from 'react'
// import Word from './word'
import {fetchWords} from '../store/list'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Emoji from 'react-emoji-render'

class List extends Component {
  componentDidMount() {
    this.props.getWords()
  }

  render() {
    return (
      <div className="ui grid">
        <div className="row" id="list">
          {this.props.list.words.map(word => {
            return (
              <span
                className="listPage "
                key={word.id}
                style={{
                  fontSize: '2.5em',
                  fontWeight: 'bold'
                }}
              >
                <Link
                  to={`/list/${word.name}`}
                  // style={{color: '#FFFFFF'}}
                  className="listWord"
                >
                  {word.name}
                  {/* <Emoji text={this.props.getEmoji(word)} /> */}
                </Link>
              </span>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.list
})

const mapDispatchToProps = dispatch => ({
  getWords: () => dispatch(fetchWords()),
  getEmoji: word => {
    let emojii = ''
    if (word.name === 'fire') {
      emojii = '🔥'
    }
    if (word.name === 'lit') {
      emojii = '🔥'
    }
    if (word.name === 'goat') {
      emojii = '🐐'
    }
    if (word.name === 'bless up') {
      emojii = '🙏'
    }
    if (word.name === 'bye felicia') {
      emojii = '👋'
    }
    if (word.name === 'fetch') {
      emojii = '🐶'
    }
    if (word.name === 'thicc') {
      emojii = '🍑'
    }
    if (word.name === 'one hunnid') {
      emojii = '💯'
    }
    if (word.name === 'clapback') {
      emojii = '👏'
    }
    if (word.name === 'hot minute') {
      emojii = '🕒'
    }
    if (word.name === 'yass') {
      emojii = '🙌'
    }
    if (word.name === 'thirst trap') {
      emojii = '🤤'
    }
    return emojii
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
