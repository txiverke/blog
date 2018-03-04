// @flow

import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import { getDictionary } from '../utils/dictionary'

type Props = {
  location: Object,
  language: Object
}

const NotFound = (props: Props) => {
  const url = props.location.pathname
  const DIC = getDictionary(props.language.current)

  return (
    <section className="app-view app-view-centered">
      <Helmet title={DIC.PAGE_NOT_FOUND} />
      <h1 className="app-content-column">
        <span className="txt-huge">404</span><br />
        <span className="txt">
          {DIC.SORRY}  
          <span className="txt-highlight">&nbsp;{` xaviervila.tech${url}  `}&nbsp;</span> 
          {DIC.NOT_EXIST}</span><br />
        <Link className="btn mt10" to="/">{DIC.BACK_TO}</Link>
      </h1>
    </section>
  )
}

const mapStateToProps = state => ({ language: state.language })

export const Unwrapped = NotFound
export default connect(mapStateToProps)(NotFound)