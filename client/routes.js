import React, {Component} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import {
  Home,
  List,
  Twitter,
  Word,
  CreateWord,
  Navbar,
  NotFound
} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    // this.props.loadInitialData()
  }

  render() {
    return (
      <div className="ui fluid container">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/navbar" component={Navbar} />
          <Route exact path="/twitter" component={Twitter} />
          <Route exact path="/list" component={List} />
          <Route path="/list/:word" component={Word} />
          <Route exact path="/add" component={CreateWord} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/notFound" component={NotFound} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}

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
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes))
export default Routes
