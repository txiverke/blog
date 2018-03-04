import React from "react"
import { shallow } from "enzyme"

import ShowMsg from '../ShowMsg'

describe('<ShowMsg />', () => {
  it('should render the component itself', () => {
    const component = shallow(<ShowMsg message="test" next={true} />)
    expect(component).toMatchSnapshot()
  })

  it('should render the right message', () => {
    const message = 'Just a random message'
    const component = shallow(<ShowMsg message={message} next={true} />)
    expect(component.text()).toEqual(`${message}`)
  })

  it('should render the error icon', () => {
    const component = shallow(<ShowMsg message='test' next={true} error={true} />)
    expect(component.find('.icon-alert-triangle').length).toEqual(1)
    expect(component.find('.icon-thumbs-up').length).toEqual(0)
  })

  it('should render the right icon', () => {
    const component = shallow(<ShowMsg message='test' next={true} error={false} />)
    expect(component.find('.icon-alert-triangle').length).toEqual(0)
    expect(component.find('.icon-like').length).toEqual(1)
  })
  
})