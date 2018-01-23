// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import EditUser from '../containers/EditUser'
import PostList from '../containers/PostList'

type Props = {
  authenticate: Auth,
  location: Object
}

const AdminSections = ({ authenticate, location }: Props) => {
  const { data } = authenticate
  const section = location.pathname.substr(location.pathname.lastIndexOf('/') + 1)
  let component = null
  switch(section) {
    case 'about-me': 
      component = <EditUser />
      break
    case 'posts':
      component = <PostList />
      break
    default:
      component = <EditUser />
      break
  }

  if (data) {
    return (
      <section className="app-view">
        <Helmet 
          title="Admin page" 
          meta={[
            { name: "description", content: "Admin page" },
            { property: "og:title", content: "Admin page" }
          ]}
        />  
        {component}
      </section>
    )
  }

  return <Redirect to="/" />
}

const mapStateToProps = (state: Object) => ({ authenticate: state.authenticate })

export default  connect(mapStateToProps)(AdminSections)