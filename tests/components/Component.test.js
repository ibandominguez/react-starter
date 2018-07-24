import React, { Component } from 'react'
import { shallow } from 'enzyme'

// This is just a quick example on how to test
// a component, import components from your project
// and get your hands on testing

class MyComponent extends Component {
  render() {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    )
  }
}

describe('MyComponent Tests', () => {
  let myComponent

  beforeEach(() => {
    myComponent = shallow(<MyComponent />)
  })

  it('contains a ul with 3 li elements', () => {
    expect(myComponent.find('ul').length).toEqual(1)
    expect(myComponent.find('ul li').length).toEqual(3)
  })
})
