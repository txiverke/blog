// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import SignOut from '../containers/SignOut'
import withWindow from '../components/withWindow'
import { updateAppLanguage } from '../actions/languageActionCreators'
import { getDictionary } from '../utils/dictionary'

type Props = {
  dispatch: Function,
  authenticate: Auth,
  language: Object,
  scroll: boolean,
}

const Header = ({ dispatch, authenticate, language, scroll }: Props) => {
  const { data } = authenticate
  const opacityClass = scroll ? '-opaque' : ''
  const nextLang = language.current === 'eng' ? 'cat' : 'eng'
  const DIC = getDictionary(language.current)

  const handleClick = () => {
    dispatch(updateAppLanguage(nextLang))
  }

  return (
    <header className="app-header">
      <div className={`app-header-bg${opacityClass}`}></div>
      <h2 className="app-header-title">
        <Link to="/">
          Xavier Vilà<br />
          <span>{DIC.FRONTEND}</span>
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
          <div className="app-header-nav-item first-item">
            <button
              className="app-header-nav-lang"
              onClick={handleClick}
            >
              <span className="icon icon-chat-3"></span>
              <span className="txt">{nextLang.toUpperCase()}</span>
            </button>
          </div>
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

const mapStateToProps = (state: Object) => ({ 
  authenticate: state.authenticate,
  language: state.language 
})

const HeaderWithWindowScroll = withWindow(Header)

export const Unwrapped = Header
export default connect(mapStateToProps)(HeaderWithWindowScroll)