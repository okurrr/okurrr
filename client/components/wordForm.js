import React, {Component} from 'react'

class WordForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form
        className="ui form "
        onSubmit={event => this.props.handleSubmit(event, this.state)}
      >
        <label htmlFor="name">Word Entry:</label>
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          style={{width: '500px'}}
        />

        <label htmlFor="description">Definition:</label>
        <textarea
          name="description"
          type="text"
          onChange={this.handleChange}
          value={this.state.description}
          rows="3"
          style={{width: '500px'}}
        />
        <br />
        <div className="row" style={{height: '15px'}} />
        <button className="ui inverted yellow button" type="submit">
          Submit
        </button>
      </form>
    )
  }
}

export default WordForm
