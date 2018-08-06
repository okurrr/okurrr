/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Navbar} from './navbar'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Navbar', () => {
  let navbar

  beforeEach(() => {
    navbar = shallow(<Navbar email="cody@email.com" />)
  })

  it('renders the email in an h3', () => {
    expect(navbar.find('h1').text()).to.be.equal('okurrr.')
  })
})
