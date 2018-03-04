// @flow

import React from 'react';
import Helmet from 'react-helmet'

import Header from './components/Header'
import Routes from './Routes'
import Footer from './components/Footer'
import { getLanguage } from './utils/helpers'
import { getDictionary } from './utils/dictionary'

import './css/App.css'

const currentYear = new Date()
const DIC = getDictionary(getLanguage())

const App = () => {
  return (
    <main className="app-root">
      <Helmet titleTemplate={`%s | Xavier Vilà - front-end developer`} defaultTitle="Xavi Vilà - front-end developer" >
        <link rel="canonical" href="http://xaviervila.tech" />
        <meta name="description" content={DIC.DESCRIPTION}  />
      </Helmet>
      <Header />
      <Routes />
      <Footer year={currentYear} />
    </main>
  )
}
export default App
