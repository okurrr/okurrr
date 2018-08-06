/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Home} from './home'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Home', () => {
  let createWord

  beforeEach(() => {
    createWord = shallow(<Home email="cody@email.com" />)
  })

  xit('renders the title in an h2', () => {
    expect(createWord.find('span').text()).to.be.equal('Recent Twitter Usage')
  })
})
