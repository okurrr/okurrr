import React, {Component} from 'react'
import {fetchTweets} from '../store/twitter'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Bar} from 'react-chartjs-2'

class Twitter extends Component {
  componentDidMount() {
    this.props.getTweets()
  }

  render() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45]
        }
      ]
    }

    return (
      <div>
        <Bar data={data} />
        {this.props.tweets.map(tweet => {
          return <div key={tweet}>{tweet}</div>
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tweets: state.twitter
})

const mapDispatchToProps = dispatch => ({
  getTweets: () => dispatch(fetchTweets())
})

export default connect(mapStateToProps, mapDispatchToProps)(Twitter)
