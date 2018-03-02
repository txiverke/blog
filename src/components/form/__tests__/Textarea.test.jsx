import React from 'react'
import Textarea from '../Textarea'
import { shallow } from 'enzyme'

describe('<Textarea />', () => {
  it('should render itself', () => {
    const title = 'Test title'
    const name = 'test_title'
    const component = shallow(<Textarea title={title} name={name} />)
    expect(component).toMatchSnapshot()
    expect(component.find('.app-form-group').length).toEqual(1)
  })

  it('should overwrite the default props', () => {
    const title = 'Test title'
    const name = 'test_title'
    const wrapper = 'test-wrapper'
    const component = shallow(<Textarea title={title} name={name} wrapper={wrapper} />)
    expect(component.find('.app-form-group').length).toEqual(0)
    expect(component.find('.test-wrapper').length).toEqual(1)
  })
})