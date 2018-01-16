// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import Search from './Search'

const Header = () => (
  <header className="app-header">
    <div className="app-header-bg"></div>
    <h1 className="app-header-title">
      <Link to="/">
        Xavier Vilà<br />
        <span>frontend developer</span>
      </Link>
    </h1>
    <div className="app-header-nav">
      <Search />
      <a 
        href="mailto:xavi.vila.albiol@gmail.com?subject=Hi Xavi"
        className="app-header-nav-item icon-mail4"
        target="_top">
        </a>
    </div>
  </header>
)

export default Header