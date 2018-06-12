// @flow

import React from 'react'
import { connect } from 'react-redux'
import ReactMessages from 'react-messages'

import SingleInput from './form/SingleInput'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import config from '../config'
import Loader from './Loader'
import Textarea from './form/Textarea';
import { loadUserData } from '../actions/userActionCreators'

type Props = {
  dispatch: Function,
  user: Item,
  handleClick: Function
}

class AdminUserItem extends React.PureComponent<Props> {
  
  props: Props

  componentDidMount() {
    const { user, dispatch } = this.props
    
    if (Object.keys(user.data).length === 0) {
      dispatch(loadUserData(config.api.profileId))
    }
  }

  handleChange = (e: InputEvent) => {
    e.target.classList.add('active')
    showInputError(e.target)
  }
  
  handleData = (e: InputEvent) => {
    const firstname = e.target.elements.firstname.value.trim()
    const lastname = e.target.elements.lastname.value.trim()
    const username = e.target.elements.username.value.trim()
    const bio = e.target.elements.bio.value.trim()
    const bio_cat = e.target.elements.bio_cat.value.trim()
    const job = e.target.elements.job.value.trim()
    const job_cat = e.target.elements.job_cat.value.trim()
  
    return { firstname, lastname, username, bio, bio_cat, job, job_cat }
  }

  handleSubmit = (e: InputEvent) => {
    e.preventDefault()

    if (showFormErrors()) {
      this.props.handleClick(this.handleData(e))
    }
  }

  render() {
    const {completed, message, error, data} = this.props.user
    
    if (completed) {
      return (
        <article className="app-grid"> 
          <ReactMessages message={message} error={error} next={true} />
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
            <SingleInput
              wrapper="app-grid-item2"
              name="job_cat"
              inputType="text"
              title="Job cat"
              placeholder="Job cat"
              content={data.job_cat}
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
            <Textarea
              wrapper="app-grid-whole"
              name="bio_cat"
              title="Bio cat"
              content={data.bio_cat}
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

export const Unwrapped = AdminUserItem
export default connect()(AdminUserItem)