import React from 'react'
import { shallow } from 'enzyme'

import { Projects } from '..'

describe('components/sections/projects', () => {
  it('should render panel without crashing', () => {
    const $ = shallow(<Projects />)
  })
})
