import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchWords} from '../store/list'
import SearchBar from './searchBar'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  componentDidMount() {
    this.props.getWords()
  }

  render() {
    return (
      <div className="ui active inverted secondary menu" id="navbar">
        <div className="item">
          <Link className="item" to="/home">
            <h1 className="ui inverted header">okurrr.</h1>
          </Link>
        </div>
        <div className="right menu">
          <nav>
            <div className="item">
              <SearchBar navbar={this.props} />
              <Link className="item midsize" to="/list">
                see all
              </Link>
              {/* <Link className="item midsize" to="/add">
                define a word
              </Link> */}
            </div>
          </nav>
          <hr />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
    search: state.search
  }
}

const mapDispatchToProps = dispatch => ({
  getWords: () => dispatch(fetchWords())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
