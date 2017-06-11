import React from 'react'
import { shallow } from 'enzyme'
import AddCard from '../../src/components/AddCard'

describe('AddCard Tests', () => {
  let addCard

  beforeEach(() => {
    addCard = shallow(<AddCard onAdd={console.log} />)
  })

  it('contains a colors select', () => {
    expect(addCard.find({ name: 'color' }).length).toEqual(1)
  })

  it('contains three color options', () => {
    expect(addCard.find({ value: 'lightblue' }).length).toEqual(1)
    expect(addCard.find({ value: 'steelblue' }).length).toEqual(1)
    expect(addCard.find({ value: 'lightcoral' }).length).toEqual(1)
  })

  it('contains a title input', () => {
    expect(addCard.find({ name: 'title' }).length).toEqual(1)
  })

  it('contains a submit input', () => {
    expect(addCard.find({ type: 'submit' }).length).toEqual(1)
  })
})
