import React, {Component} from 'react'
import {createWord} from '../store/list'
import {connect} from 'react-redux'
import WordForm from './wordForm'

const CreateWord = ({handleSubmit}) => (
  <div className="ui grid">
    <div className="row" id="add">
      Add your word below:
    </div>
    <WordForm className="row" handleSubmit={handleSubmit} />
  </div>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: async (event, wordData) => {
    event.preventDefault()
    const wordAction = await dispatch(createWord(wordData))

    const word = wordAction.word.name
    ownProps.history.push(`/list/${word}`)
  }
})

export default connect(null, mapDispatchToProps)(CreateWord)
