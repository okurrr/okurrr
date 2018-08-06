import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchWords} from '../store/list'
import {Link} from 'react-router-dom'

class Home extends Component {
  componentDidMount() {
    this.props.getWords()
  }

  render() {
    const trending = this.props.list.words
      .filter(word => word.id > 35)
      .slice(0, 5)

    return (
      <div className="ui grid">
        {console.log(this.props)}
        <div className="row" id="homebase">
          <span className=""> top trending words: </span>
        </div>
        {console.log('trending', trending)}
        <div className="row" id="homebasebase">
          <div className="ui grid">
            {trending.map(word => {
              return (
                <div
                  className="column"
                  key={word.id}
                  style={{
                    justifyContent: 'center',
                    width: '120px',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }}
                >
                  <Link to={`/list/${word.name}`} className="listWord">
                    {word.name}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        <div className="row" id="home">
          <span className="homePage"> okurrr. </span>
          <div
            style={{
              display: 'flex',
              fontSize: '30px',
              width: '100%',
              justifyContent: 'center',
              color: 'white'
            }}
          >
            {/* dictionary x culture x data */}
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
