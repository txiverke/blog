// @flow

import React from 'react'
import { Link } from 'react-router-dom'

const socialMedia = [
  { name: 'Twitter', url: 'https://twitter.com/txiverke' },
  { name: 'Github', url: 'https://github.com/txiverke' },
  { name: 'Instagram', url: 'https://www.instagram.com/txiverke/' },
]

const year = new Date()

const Footer = () => (
  <footer className="app-footer">
    <ul className="app-footer-list">
    {socialMedia.map(item => 
      <li key={item.name} className="app-footer-item">
        <a href={item.url} className={`icon-${item.name.toLowerCase()}`} target="_blank">
          <span>{`Link to my ${item.name}`}</span>
        </a>
      </li>
    )}
    </ul>
    <Link to="/admin" className="txt-tiny txt-transparent">
      ©&nbsp; <time dateTime={year}>{year.getFullYear()}</time>&nbsp;xaviervila.tech
    </Link>
  </footer>
)

export default Footer