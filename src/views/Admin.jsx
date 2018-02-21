// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom' 

import Stats from '../components/Stats'
import { getDictionary } from '../utils/dictionary'

const Admin = props => { 
  const { data } = props.authenticate
  const DIC =  getDictionary(props.language.current)

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
        <Stats DIC={DIC}/>
      </section>
    )
  }

  return <Redirect to="/sign-in" />
} 

const mapStateToProps = state =>({ 
  authenticate: state.authenticate,
  language: state.language 
})

export default connect(mapStateToProps)(Admin)