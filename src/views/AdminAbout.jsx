// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import EditUser from '../containers/EditUser'

type Props = {
  authenticate: Auth
}

const AdminAbout = ({ authenticate }: Props) => {
  const { data } = authenticate
  
  if (data) {
    return (
      <div className="app-view">
        <Helmet 
          title="Admin page" 
          meta={[
            { name: "description", content: "Admin page" },
            { property: "og:title", content: "Admin page" }
          ]}
        />  
        <EditUser />
      </div>
    )
  }

  return <Redirect to="/" />
}

const mapStateToProps = (state: Object) => ({ authenticate: state.authenticate })

export default  connect(mapStateToProps)(AdminAbout)