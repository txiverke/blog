// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import SignOut from '../containers/SignOut'
import withWindow from '../components/withWindow'

type Props = {
  authenticate: Auth,
  scroll: boolean
}

const Header = ({ authenticate, scroll }: Props) => {
  const { data } = authenticate
  const opacityClass = scroll ? '-opaque' : ''

  return (
    <header className="app-header">
      <div className={`app-header-bg${opacityClass}`}></div>
      <h2 className="app-header-title">
        <Link to="/">
          Xavier Vilà<br />
          <span>front-end developer</span>
        </Link>
      </h2>

      {data && 
        <nav className="app-header-nav">
          <Link to="/admin" className="app-header-nav-item icon-user"></Link>
          <SignOut />
        </nav>
      }

      {!data && 
        <nav className="app-header-nav">
          <a 
            href="mailto:xavi.vila.albiol@gmail.com?subject=Hi Xavi"
            className="app-header-nav-item app-header-nav-mailto icon-mail-envelope-open"
            target="_top">
            </a>
        </nav>
      }
    </header>
  )
}

const mapStateToProps = state => ({ authenticate: state.authenticate })

const HeaderWithWindowScroll = withWindow(Header)

export default connect(mapStateToProps)(HeaderWithWindowScroll)