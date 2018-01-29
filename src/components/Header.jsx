// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Search from './Search'
import SignOut from '../containers/SignOut'

class Header extends React.Component {
  state = {
    scroll: false
  }

  props: {
    authenticate: Auth
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      let posY = window.scrollY

      if (posY > 10) {
        this.setState({ scroll: true })
      } else {
        this.setState({ scroll: false })
      }
    });
  }

  render() {
    const { data } = this.props.authenticate
    const { scroll } = this.state
    let opacityClass = scroll ? '-opaque' : ''

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
          <div className="app-header-nav">
            <Link to="/admin" className="app-header-nav-item icon-lock"></Link>
            <SignOut />
          </div>
        }
        {!data && 
          <div className="app-header-nav">
            <Search />
            <a 
              href="mailto:xavi.vila.albiol@gmail.com?subject=Hi Xavi"
              className="app-header-nav-item app-header-nav-mailto icon-mail-envelope-open"
              target="_top">
              </a>
          </div>
        }
      </header>
    )
  }
}

const mapStateToProps = state => ({ 
  authenticate: state.authenticate 
})

export default connect(mapStateToProps)(Header)