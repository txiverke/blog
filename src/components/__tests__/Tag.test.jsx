import React from 'react'
import Tag from '../Tag'
import { shallow } from 'enzyme'

describe('<Tag />', () => {
  it('should render itself', () => {
    const component = shallow(<Tag label="testing" />)
    expect(component).toMatchSnapshot()
  })

  it('should handle the click event', () => {
    const label = "testing"
    const component = shallow(<Tag label={label} handleClick={() => {}} />)
    const mockedEvent = { target: { dataset: { value: label } } }
    expect(component.find('.app-search-item').length).toEqual(1)
    component.simulate('click', mockedEvent)
    expect(component.find('.app-search-item').length).toEqual(0)
    expect(component.find('.app-search-item-alpha').length).toEqual(1)
  })
})