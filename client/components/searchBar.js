import React, {Component} from 'react'
import {connect} from 'react-redux'
import {searchWord} from '../store/search'
import {withRouter} from 'react-router-dom'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  render() {
    let wordsArray = this.props.navbar.list.words.map(elem => elem.name)
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="type any word..."
            onChange={event => {
              this.props.searchForWord(event.target.value)
              this.setState({search: event.target.value})
            }}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.props.findPage(
                  wordsArray,
                  this.props.navbar.search,
                  this.props
                )
                this.setState({search: ''})
              }
            }}
            value={this.state.search}
          />
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchForWord: word => dispatch(searchWord(word)),
  findPage: (array, search, props) => {
    if (array.includes(search.toLowerCase())) {
      props.history.push(`/list/${search.toLowerCase()}`)
    } else {
      props.history.push(`/notFound`)
    }
  }
})

export default connect(null, mapDispatchToProps)(withRouter(SearchBar))
