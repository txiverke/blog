// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom' 

import { isAuthenticated } from '../actions/userActionCreators'
import SignInForm from '../containers/SignInForm'

type Props = {
  authenticate: Auth,
  dispatch: Function,
}

class SignIn extends React.Component<Props> {
  props: Props

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(isAuthenticated())
  }

  render() {
    const { data } = this.props.authenticate
    
    if (!data) {
      return (
        <section className="app-view app-view-centered">
          <Helmet 
            title="Welcome!" 
            meta={[
              { name:"description", content: "Sign In to Admin page" },
              { property: "og:title", content: "Sign In to Admin page" }
            ]}
          />
          <SignInForm />
        </section>
      )
    }

    return <Redirect to="/admin" />
  }
}

const mapStateToProps = state =>({ authenticate: state.authenticate })

export const Unwrapped = SignIn
export default connect(mapStateToProps)(SignIn)