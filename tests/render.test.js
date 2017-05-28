import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

class Welcome extends React.Component {
  render() {
    return (
      <div>Hello world</div>
    )
  }
}

describe('Welcome (Snapshot)', () => {
  it('Welcome renders hello world [Jest only]', () => {
    const component = renderer.create(<Welcome />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })

  it('Welcome renders hello world [Enzyme style]', () => {
    const welcome = shallow(<Welcome />)
    expect(welcome.find('div').text()).toEqual('Hello world')
  })
})
