import React, {Component} from 'react'
import {fetchWords} from '../store/list'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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
                <Link to={`/list/${word.name}`} className="listWord">
                  {word.name}
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
  getWords: () => dispatch(fetchWords())
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
