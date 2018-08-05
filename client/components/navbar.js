import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div className="ui active inverted secondary menu" id="fade">
    <div className="item">
      <Link className="item" to="/home">
        <h1 className="ui inverted header">okurrr.</h1>
      </Link>
    </div>
    <div className="right menu">
      <nav>
        <div className="item">
          <Link className="item midsize" to="/list">
            see all
          </Link>
          <Link className="item midsize" to="/add">
            define a word
          </Link>
        </div>
      </nav>
      <hr />
    </div>
  </div>
)

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

export default connect(null)(Navbar)
