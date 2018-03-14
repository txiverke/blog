// @flow

import React from 'react'
import ReactMessages from 'react-messages'

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
  authenticate: Auth,
  handleClick: Function
}

const SignInForm = ({ authenticate, handleClick }: Props) => {
  const { message, completed, error } = authenticate
  const errorIcon = error === true ? 'warning' : ''

  return (
    <article className="app-grid"> 
      <ReactMessages message={message} error={error} next={completed} icon={errorIcon}  />
      <h2 className="app-grid-header tit-section">Sign In</h2>
      <form
          noValidate
          className="app-grid-body" 
          onSubmit={
            (event) => {
              event.preventDefault()
              if (showFormErrors()) {
                handleClick(handleData(event))
              }
          }}
        >
        <SingleInput
          wrapper="app-grid-item1"
          name="username"
          inputType="text"
          title="Username"
          placeholder="Username"
          pattern=".{6,}"
          controlFunc={handleChange}
        />
        <SingleInput
          wrapper="app-grid-item2"        
          name="password"
          inputType="password"
          title="Password"
          placeholder="Password"
          pattern=".{6,}"
          controlFunc={handleChange}
        />
        <button 
          type="submit"
          className="app-grid-btn btn"
          disabled={!completed}
        >
        Sign In
        </button>
      </form>
    </article>
  )
}

export default SignInForm