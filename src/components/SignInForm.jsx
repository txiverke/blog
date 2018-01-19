// @flow

import React from 'react'

import SingleInput from './form/SingleInput'
import { showFormErrors, showInputError } from '../utils/errorHandler'

const handleChange = event => {
  event.target.classList.add('active')
  showInputError(event.target)
}

const handleData = event => {
  const username = event.target.elements.username.value.trim()
  const password = event.target.elements.password.value.trim()

  return { username, password }
}

type Props = {
  message: string,
  handleClick: Function
}

const SignInForm = ({ message, handleClick }: Props) => (
  <form
      noValidate
      className="app-content-section" 
      onSubmit={
        (event) => {
          event.preventDefault()
          if (showFormErrors()) {
            handleClick(handleData(event))
          }
      }}
    >
    <h2 className="tit-section">Sign In</h2>
    <SingleInput
      name="username"
      inputType="text"
      title="Username"
      placeholder="Username"
      pattern=".{6,}"
      controlFunc={handleChange}
    />
    <SingleInput
      name="password"
      inputType="password"
      title="Password"
      placeholder="Password"
      pattern=".{6,}"
      controlFunc={handleChange}
    />
    <button 
      type="submit"
      className="btn"
    >
    Sign In
    </button>
    <p className="txt-highlight">{message}</p>
  </form>
)

export default SignInForm