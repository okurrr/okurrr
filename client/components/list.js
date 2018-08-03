import React, {Component} from 'react'
// import Word from './word'
import {fetchWords} from '../store/list'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class List extends Component {
  componentDidMount() {
    this.props.getWords()
  }

  render() {
    return (
      <div>
        {this.props.list.map(word => {
          return <div key={word.id}>{word.name}</div>
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.list
})

const mapDispatchToProps = dispatch => ({
  getWords: () => dispatch(fetchWords())
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
