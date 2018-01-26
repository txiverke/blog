// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom' 

import Stats from '../components/Stats'

const Admin = props => { 
  const { data } = props.authenticate

  if (data) {
    return (
      <section className="app-view app-view-centered">
        <Helmet 
          title="Admin page" 
          meta={[
            { name: "description", content: "Admin page" },
            { property: "og:title", content: "Admin page" }
          ]}
        />
        <Stats />
      </section>
    )
  }

  return <Redirect to="/sign-in" />
} 

const mapStateToProps = state =>({ authenticate: state.authenticate })

export default connect(mapStateToProps)(Admin)