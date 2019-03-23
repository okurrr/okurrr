import React from 'react'
import {Link} from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="ui grid">
      <div className="row" id="notFound">
        <span className="notFoundPage">
          word not found, please see full list here:
          <div>
            <Link
              className="notFoundLink"
              to="/list"
              style={{
                color: '#FFFFFF',
                border: '5px solid white',
                padding: '10px'
              }}
            >
              see all
            </Link>
          </div>
          {/* <div>or add here:</div>
          <div>
            <Link
              className="notFoundLink"
              to="/add"
              style={{
                color: '#FFFFFF',
                border: '5px solid white',
                padding: '10px'
              }}
            >
              define
            </Link>
          </div> */}
        </span>
      </div>
    </div>
  )
}

export default NotFound
