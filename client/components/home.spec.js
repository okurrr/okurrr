/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {TwitterSection} from './createWord'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('TwitterSection', () => {
  let createWord

  beforeEach(() => {
    createWord = shallow(<TwitterSection email="cody@email.com" />)
  })

  it('renders the title in an h2', () => {
    expect(createWord.find('h2').text()).to.be.equal('Recent Twitter Usage')
  })
})
