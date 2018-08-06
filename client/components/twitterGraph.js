import React from 'react'
import {fetchTweets} from '../store/twitter'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {Line} from 'react-chartjs-2'

const TwitterGraph = props => {
  const tweetsArray = props.tweets.tweets
  console.log('thisprops', tweetsArray)
  const timeArray = tweetsArray.map(tweet =>
    props.getTime(tweet.time.slice(4, 10) + ' 2018')
  )
  const timeObj = props.transform(timeArray)
  let labs = Object.keys(timeObj).reverse()
  let dats = Object.values(timeObj).reverse()

  const data = {
    labels: labs,
    datasets: [
      {
        label: '# tweets',
        // fill: false,
        lineTension: 0.1,
        backgroundColor: 'white',
        borderColor: 'white',
        // borderCapStyle: 'butt',
        // borderDash: [],
        // borderDashOffset: 0.0,
        // borderJoinStyle: 'miter',
        // pointBorderColor: 'black',
        // pointBackgroundColor: 'black',
        // pointBorderWidth: 1,
        // pointHoverRadius: 5,
        // pointHoverBackgroundColor: 'black',
        // pointHoverBorderColor: 'black',
        // pointHoverBorderWidth: 2,
        // pointRadius: 1,
        // pointHitRadius: 10,
        data: dats
      }
    ]
  }

  const options = {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: '# tweets',
            fontColor: 'white'
          },
          ticks: {
            fontColor: 'white'
          }
        }
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'days since today',
            fontColor: 'white'
          },
          ticks: {
            fontColor: 'white'
          }
        }
      ]
    }
  }

  return (
    <div>
      <h2>Tweets over Time</h2>
      <Line data={data} options={options} />
    </div>
  )
}

const mapDispatchToProps = () => ({
  getTime: date => {
    let dateForm = new Date(date)
    return Math.round((Date.now() - dateForm.getTime()) / 86400000)
  },
  transform: arr => {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        obj[arr[i]]++
      } else {
        obj[arr[i]] = 1
      }
    }
    return obj
  }
})

export default connect(null, mapDispatchToProps)(TwitterGraph)
