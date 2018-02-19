// @flow

import React from 'react'
import { connect } from 'react-redux'

import SingleInput from './form/SingleInput'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import config from '../config'
import Loader from './Loader'
import ShowMsg from './ShowMsg'
import Textarea from './form/Textarea';
import { loadUserData } from '../actions/userActionCreators'

class AdminUserItem extends React.PureComponent {
  props: {
    dispatch: Function,
    user: Item,
    handleClick: Function
  }

  componentDidMount() {
    const { user, dispatch } = this.props
    
    if (Object.keys(user.data).length === 0) {
      dispatch(loadUserData(config.api.profileId))
    }
  }

  handleChange = (event) => {
    event.target.classList.add('active')
    showInputError(event.target)
  }
  
  handleData = (event) => {
    const firstname = event.target.elements.firstname.value.trim()
    const lastname = event.target.elements.lastname.value.trim()
    const username = event.target.elements.username.value.trim()
    const bio = event.target.elements.bio.value.trim()
    const job = event.target.elements.job.value.trim()
  
    return { firstname, lastname, username, bio, job }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (showFormErrors()) {
      this.props.handleClick(this.handleData(event))
    }
  }

  render() {
    const {completed, message, error, data} = this.props.user
    
    if (completed) {
      return (
        <article className="app-grid"> 
          <ShowMsg message={message} error={error} next={true} />
          <h2 className="app-grid-header tit-section">Update User</h2>
          <form
            noValidate
            className="app-grid-body" 
            onSubmit={this.handleSubmit}
          >
          <SingleInput
            wrapper="app-grid-item1"
            name="firstname"
            inputType="text"
            title="First name"
            placeholder="First name"
            content={data.firstname}
            pattern=".{2,}"
            controlFunc={this.handleChange}
          />
          <SingleInput
            wrapper="app-grid-item2"
            name="lastname"
            inputType="text"
            title="Last name"
            placeholder="Last name"
            content={data.lastname}
            pattern=".{2,}"
            controlFunc={this.handleChange}
          />
          <SingleInput
            wrapper="app-grid-item1"
            name="username"
            inputType="text"
            title="Username"
            placeholder="Username"
            content={data.username}
            pattern=".{2,}"
            controlFunc={this.handleChange}
          />
          <SingleInput
            wrapper="app-grid-item2"
            name="job"
            inputType="text"
            title="Job"
            placeholder="Job"
            content={data.job}
            pattern=".{2,}"
            controlFunc={this.handleChange}
          />
          <Textarea
            wrapper="app-grid-whole"
            name="bio"
            title="Bio"
            content={data.bio}
            pattern=".{6,}"
            controlFunc={this.handleChange}
          />
          <button 
            type="submit"
            className="app-grid-btn btn"
            disabled={!completed}
          >
          Update Profile
          </button>
        </form>
      </article>
      )
    }
  
    return <Loader msg={message} />
  }
}

export default connect()(AdminUserItem)