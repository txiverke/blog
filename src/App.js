// @flow

import React from 'react';
import Helmet from 'react-helmet'

import Routes from './Routes'
import Header from './components/Header'
import Footer from './components/Footer'

import './css/App.css'

const App = () =>
  <main className="app-root">
    <Helmet titleTemplate={`%s | Xavier Vilà - frontend developer`} defaultTitle="Xavi Vilà - frontend developer" >
      <link rel="canonical" href="http://xaviervila.tech" />
      <meta name="description" content="Personal page of Xavier Vilà" />
    </Helmet>
    <Header />
    <Routes />
    <Footer />
  </main>

export default App
