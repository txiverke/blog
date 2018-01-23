// @flow

import React from 'react'

type Props = {
  wrapper?: string,
  name: string,
  inputType: mixed,
  title: string,
  controlFunc?: Function,
  content?: string,
  placeholder?: string,
  size?: string,
  required?: boolean,
  pattern?: string,
}

const SingleInput = (props: Props) => (
  <div className={props.wrapper}>
    <label
      id={props.name + 'Label'}
      htmlFor={props.name} 
      className="app-form-label"
    >
      {props.title}
    </label>
    <input
      id={props.name + 'Input'}
      className="app-form-input"
      name={props.name}
      type={props.inputType}
      autoComplete={props.name}
      defaultValue={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
      pattern={props.pattern}
      required={props.required}
    />
    <p className="app-form-error" id={props.name + 'Error'}></p>
  </div>
) 
  
SingleInput.defaultProps = {
  wrapper: 'app-form-group',
  content: '',
  placeholder: '',
  size: '',
  pattern: '',
  required: true,
  controlFunc: () => {}
}

export default SingleInput