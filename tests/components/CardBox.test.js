import React from 'react'
import { shallow } from 'enzyme'
import CardBox from '../../src/components/CardBox'

describe('CardBox Tests', () => {
  let cardBox

  beforeEach(() => {
    cardBox = shallow(<CardBox
      title={'Test'}
      color={'steelblue'}
      onClick={console.log}
    />)
  })

  it('renders the text property', () => {
    expect(cardBox.text()).toEqual('Test')
  })
})
