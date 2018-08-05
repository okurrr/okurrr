import React, {Component} from 'react'
import {fetchTweets} from '../store/twitter'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Line} from 'react-chartjs-2'

class Twitter extends Component {
  componentDidMount() {
    this.props.getTweets()
  }

  render() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'tweets over last ',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'black',
          borderColor: 'black',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'black',
          pointBackgroundColor: 'black',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'black',
          pointHoverBorderColor: 'black',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }

    return (
      <div>
        <h2>Line Example</h2>
        <Line data={data} />
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
