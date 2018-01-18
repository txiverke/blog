// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import { loginUser } from '../actionCreators'

class Admin extends React.Component{

  componentDidMount() {
    const { dispatch } = this.props
    const obj = {
      username: 'txiverke',
      password: 'Detroit2017!'
    }
    dispatch(loginUser(obj))
  }
  render() {
    console.log(this.props.authentication.token)
    return (
      <section className="app-view">
        <Helmet title="About me" />
        <article className="app-content">
          
        </article>
      </section>
    )
  }
} 

const mapStateToProps = state =>({ authentication: state.login })

export default connect(mapStateToProps)(Admin)