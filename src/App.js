// @flow

import React from 'react';
import Helmet from 'react-helmet'

import Header from './components/Header'
import Routes from './Routes'
import Footer from './components/Footer'

import './css/App.css'

const App = () => {
  return (
    <main className="app-root">
      <Helmet titleTemplate={`%s | Xavier Vilà - front-end developer`} defaultTitle="Xavi Vilà - front-end developer" >
        <link rel="canonical" href="http://xaviervila.tech" />
        <meta name="description" content="Personal page of Xavier Vilà" />
      </Helmet>
      <Header />
      <Routes />
      <Footer year={new Date()} />
    </main>
  )
}
export default App
