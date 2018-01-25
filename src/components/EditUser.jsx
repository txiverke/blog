// @flow

import React from 'react'
import { connect } from 'react-redux'

import SingleInput from './form/SingleInput'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import config from '../config'
import { loadUserData } from '../actions/userActionCreators'
import Loader from './Loader'
import ShowMsg from './ShowMsg'
import Textarea from './form/Textarea';

type Props = {
  dispatch: Function,
  user: User,
  handleClick: Function
}

const EditUser = ({ dispatch, user, handleClick}: Props) => {
  const { message, data, completed, error } = user

  const handleChange = (event) => {
    event.target.classList.add('active')
    showInputError(event.target)
  }
  
  const handleData = (event) => {
    const firstname = event.target.elements.firstname.value.trim()
    const lastname = event.target.elements.lastname.value.trim()
    const username = event.target.elements.username.value.trim()
    const bio = event.target.elements.bio.value.trim()
    const job = event.target.elements.job.value.trim()
  
    return Object.assign({}, user, {
      firstname,
      lastname,
      username,
      bio,
      job
    })
  }

  if (completed) {
    return (
      <article className="app-form-grid"> 
        <ShowMsg message={message} error={error} next={true} />
        <h2 className="app-form-grid-header tit-section">Update User</h2>
        <form
          noValidate
          className="app-form-grid-body" 
          onSubmit={
            (event) => {
              event.preventDefault()
              if (showFormErrors()) {
                handleClick(config.api.profileId, handleData(event))
              }
          }}
        >
        <SingleInput
          wrapper="app-form-grid-item1"
          name="firstname"
          inputType="text"
          title="First name"
          placeholder="First name"
          content={data.firstname}
          pattern=".{2,}"
          controlFunc={handleChange}
        />
        <SingleInput
          wrapper="app-form-grid-item2"
          name="lastname"
          inputType="text"
          title="Last name"
          placeholder="Last name"
          content={data.lastname}
          pattern=".{2,}"
          controlFunc={handleChange}
        />
        <SingleInput
          wrapper="app-form-grid-item1"
          name="username"
          inputType="text"
          title="Username"
          placeholder="Username"
          content={data.username}
          pattern=".{2,}"
          controlFunc={handleChange}
        />
        <SingleInput
          wrapper="app-form-grid-item2"
          name="job"
          inputType="text"
          title="Job"
          placeholder="Job"
          content={data.job}
          pattern=".{2,}"
          controlFunc={handleChange}
        />
        <Textarea
          wrapper="app-form-grid-whole"
          name="bio"
          title="Bio"
          content={data.bio}
          pattern=".{6,}"
          controlFunc={handleChange}
        />
        <button 
          type="submit"
          className="app-form-btn btn"
        >
        Update Profile
        </button>
      </form>
    </article>
    )
  }

  return <Loader msg={message} />
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(EditUser)