// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom' 

import { loginUser } from '../actionCreators'
import Loading from '../components/Loading'

class Admin extends React.Component{
  props: {
    auth: Login,
    location: Object,
    dispatch: Function
  }

  componentDidMount() {
    const { dispatch } = this.props
    const obj = {
      username: 'txiverke',
      password: 'Detroit2017!'
    }
    dispatch(loginUser(obj))

  }
  render() {
    const { completed, message, data } = this.props.auth

    if (completed && data) {
      return (
        <section className="app-view">
          <Helmet 
            title="Admin page" 
            meta={[
              { name: "description", content: "Admin page" },
              { property: "og:title", content: "Admin page" }
            ]}
          />
          <article className="app-content">
            
          </article>
        </section>
      )
    } else if (completed && !data) {
      return <Redirect to='/' />
    }

    return <Loading msg={message} />
  }
} 

const mapStateToProps = state =>({ auth: state.login })

export default connect(mapStateToProps)(Admin)