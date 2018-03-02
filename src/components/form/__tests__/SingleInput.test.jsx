import React from 'react'
import SingleInput from '../SingleInput'
import { shallow } from 'enzyme'

describe('<SingleInput />', () => {
  it('should render itself', () => {
    const name = 'test_name'
    const inputType = 'text'
    const title = 'Test name'
    const component = shallow(<SingleInput name={name} inputType={inputType} title={title} />)
    expect(component).toMatchSnapshot()
    expect(component.find('.app-form-group').length).toEqual(1)
    expect(component.text()).toEqual(title)
  })

  it('should overwrite the default props', () => {
    const name = 'test_name'
    const inputType = 'text'
    const title = 'Test name'
    const wrapper = 'test-wrapper'
    const component = shallow(<SingleInput name={name} inputType={inputType} title={title} wrapper={wrapper} />)
    expect(component).toMatchSnapshot()
    expect(component.find('.app-form-group').length).toEqual(0)
    expect(component.find('.test-wrapper').length).toEqual(1)
  })
})