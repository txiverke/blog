import React from 'react'
import ImageUploader from '../ImageUploader'
import { shallow } from 'enzyme'

describe('<ImageUploader />', () => {
  it('should render itself', () => {
    const component = shallow(<ImageUploader />)
    expect(component).toMatchSnapshot()
    expect(component.text()).toEqual('<SingleInput />Please select an Image for Preview')
  })

  it('should handle events', () => {
    const component = shallow(<ImageUploader />)
    expect(component.find('SingleInput').length).toEqual(1)
  })
})