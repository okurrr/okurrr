/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {CreateWord} from './createWord'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('CreateWord', () => {
  let createWord

  beforeEach(() => {
    createWord = shallow(<CreateWord email="cody@email.com" />)
  })

  it('renders the email in an h3', () => {
    expect(createWord.find('div').text()).to.be.equal('Add your word below:')
  })
})
