// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Search from './Search'
import SignOut from '../containers/SignOut'

type Props = {
  authenticate: Auth
}

const Header = (props: Props) => {

  const { data } = props.authenticate
  let menu = null

  if (data) {
    menu = (
    <div className="app-header-nav">
      <Link to="/admin" className="app-header-nav-item icon-lock"></Link>
      <SignOut />
    </div>
    )
  } else {
    menu = (
      <div className="app-header-nav">
        <Search />
        <a 
          href="mailto:xavi.vila.albiol@gmail.com?subject=Hi Xavi"
          className="app-header-nav-item app-header-nav-maito icon-mail-envelope-open"
          target="_top">
          </a>
      </div>
    )
  }

  return (
    <header className="app-header">
      <div className="app-header-bg"></div>
      <h1 className="app-header-title">
        <Link to="/">
          Xavier Vilà<br />
          <span>frontend developer</span>
        </Link>
      </h1>
      {menu}
    </header>
  )
}

const mapStateToProps = state => ({ authenticate: state.authenticate })

export default connect(mapStateToProps)(Header)