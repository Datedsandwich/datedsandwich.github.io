import React from 'react'
import {shallow} from 'enzyme'

import Education from '..'

describe('components/organisms/education', () => {
  it('should render panel without crashing', () => {
    const $ = shallow(
      <Education/>
    )
  })
})