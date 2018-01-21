// @flow

import React from 'react'
import { connect } from 'react-redux'

import SingleInput from './form/SingleInput'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import config from '../config'
import { loadUserData } from '../actionCreators'
import Loader from './Loader'
import ShowMsg from './ShowMsg'
import Textarea from './form/Textarea';


class EditUser extends React.Component {
  props: {
    dispatch: Function,
    user: User,
    handleClick: Function
  }

  handleChange(event) {
    event.target.classList.add('active')
    showInputError(event.target)
  }
  
  handleData = (event) => {
    const firstname = event.target.elements.firstname.value.trim()
    const lastname = event.target.elements.lastname.value.trim()
    const username = event.target.elements.username.value.trim()
    const bio = event.target.elements.bio.value.trim()
    const job = event.target.elements.job.value.trim()
  
    return Object.assign({}, this.props.user, {
      firstname,
      lastname,
      username,
      bio,
      job
    })
  }

  componentDidMount() {
    const { dispatch, user } = this.props

    if (Object.keys(user.data).length === 0) {
      dispatch(loadUserData(config.api.profileId))
    }
  }

  render() {
    const { message, data, completed, error } = this.props.user

    if (completed) {
      return (
        <form
          noValidate
          className="app-content-form" 
          onSubmit={
            (event) => {
              event.preventDefault()
              if (showFormErrors()) {
                this.props.handleClick(config.api.profileId, this.handleData(event))
              }
          }}
        >
        <ShowMsg message={message} error={error} next={true} />
        <h2 className="tit-section">Upload User</h2>
        <SingleInput
          name="firstname"
          inputType="text"
          title="First name"
          placeholder="First name"
          content={data.firstname}
          pattern=".{2,}"
          controlFunc={this.handleChange}
        />
        <SingleInput
          name="lastname"
          inputType="text"
          title="Last name"
          placeholder="Last name"
          content={data.lastname}
          pattern=".{2,}"
          controlFunc={this.handleChange}
        />
        <SingleInput
          name="username"
          inputType="text"
          title="Username"
          placeholder="Username"
          content={data.username}
          pattern=".{2,}"
          controlFunc={this.handleChange}
        />
        <SingleInput
          name="job"
          inputType="text"
          title="Job"
          placeholder="Job"
          content={data.job}
          pattern=".{2,}"
          controlFunc={this.handleChange}
        />
        <Textarea
          name="bio"
          title="Bio"
          content={data.bio}
          pattern=".{6,}"
          controlFunc={this.handleChange}
        />
        <button 
          type="submit"
          className="app-form-btn btn"
        >
        Upload Profile
        </button>
      </form>
      )
    }

    return <Loader msg={message} />
  }

}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(EditUser)