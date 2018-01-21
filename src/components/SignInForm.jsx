// @flow

import React from 'react'

import SingleInput from './form/SingleInput'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import ShowMsg from './ShowMsg'

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
  authenticate: Auth,
  handleClick: Function
}

const SignInForm = ({ authenticate, handleClick }: Props) => {
  const { message, completed } = authenticate

  return (
    <form
        noValidate
        className="app-content-form" 
        onSubmit={
          (event) => {
            if (showFormErrors()) {
              event.preventDefault()
              handleClick(handleData(event))
            }
        }}
      >
      <ShowMsg message={message} error={true} next={completed} />
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
        disabled={!completed}
      >
      Sign In
      </button>
    </form>
  )
}

  

export default SignInForm