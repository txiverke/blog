// @flow

import React from 'react'

type Props = {
  wrapper?: string,
  title: string,
  name: string,
  rows?: Number,
  content?: string,
  resize?: boolean,
  placeholder?: string,
  controlFunc?: Function,
  required?: boolean 
}

const TextArea = (props: Props) => (
  <div className={props.wrapper}>
    <label
      id={props.name + 'Label'} 
      htmlFor={props.name} 
      className="app-form-label"
    >
      {props.title}
    </label>
    <textarea
      id={props.name + 'Textarea'} 
      className="app-form-input"
      style={props.resize ? null : { resize: 'none' }}
      name={props.name}
      rows={props.rows}
      defaultValue={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
      required={props.required}
    />
    <p className="app-form-error" id={props.name + 'Error'}></p>
  </div>
)

TextArea.defaultProps = {
  wrapper: 'app-form-group',
  rows: 5,
  content: '',
  resize: false,
  placeholder: '',
  controlFunc: () => {},
  required: true,
}

export default TextArea