import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Home, List, Word, CreateWord, NotFound} from './components'

class Routes extends Component {
  componentDidMount() {
    // this.props.loadInitialData()
  }

  render() {
    return (
      <div className="ui fluid container">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/list" component={List} />
          <Route path="/list/:word" component={Word} />
          {/* <Route exact path="/add" component={CreateWord} /> */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/notFound" component={NotFound} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}

export default Routes
