// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

type Props = {
  match: Object,
  location: Object,
  history: Object,
  staticContext: any
}

const NotFound = (props: Props) => {
  const url = props.location.pathname;
  return (
    <div className="app-view">
      <Helmet title="Page not found" />
     <h1>
      {`Ups the url: ${url} does not exit. `}
      <Link to="/">Back to Landing page</Link>
    </h1>
    </div>
  )
}

export default NotFound