// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

type Props = {
  location: Object,
}

const NotFound = (props: Props) => {
  const url = props.location.pathname
  
  return (
    <section className="app-view app-view-centered">
      <Helmet title="Page not found" />
      <h1 className="app-content-column">
        <span className="txt-huge">404</span><br />
        <span className="txt">
          Sorry, but the url:  
          <span className="txt-highlight">&nbsp;{` xaviervila.tech${url}  `}&nbsp;</span> 
          does not exist.</span><br />
        <Link className="btn mt10" to="/">Back to the landing page</Link>
      </h1>
    </section>
  )
}

export default NotFound