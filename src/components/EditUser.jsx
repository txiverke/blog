// @flow

import React from 'react'
import { connect } from 'react-redux'

import SingleInput from './form/SingleInput'
import { showFormErrors, showInputError } from '../utils/errorHandler'
import config from '../config'
import { loadUserData } from '../actionCreators'
import Loader from './Loader'


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
  
    return Object.assign({}, this.props.user, {
      firstname,
      lastname,
      username
    })
  }

  componentDidMount() {
    const { dispatch, user } = this.props
    console.log(user)

    if (Object.keys(user.data).length === 0) {
      dispatch(loadUserData(config.api.profileId))
    }
  }

  render() {
    const { message, data, completed } = this.props.user

    if (completed) {
      return (
        <form
          noValidate
          className="app-content-section" 
          onSubmit={
            (event) => {
              event.preventDefault()
              if (showFormErrors()) {
                this.props.handleClick(config.api.profileId, this.handleData(event))
              }
          }}
        >
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
          pattern=".{6,}"
          controlFunc={this.handleChange}
        />
        <button 
          type="submit"
          className="btn"
        >
        Upload Profile
        </button>
        <p className="txt-highlight">{message}</p>
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