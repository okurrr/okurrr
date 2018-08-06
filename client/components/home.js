import React from 'react'
import {connect} from 'react-redux'

export const Home = props => {
  return (
    <div className="ui grid">
      <div className="row" id="homebase">
        <span className=""> top trending words </span>
      </div>

      <div className="row" id="home">
        <span className="homePage"> okurrr. </span>
        <div
          style={{
            display: 'flex',
            fontSize: '38px',
            width: '100%',
            justifyContent: 'center'
          }}
        >
          dictionary x culture x data
        </div>
      </div>
    </div>
  )
}

export default Home
