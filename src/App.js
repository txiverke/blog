// @flow

import React from 'react';
import Helmet from 'react-helmet'

import Routes from './Routes'

const App = () =>
  <div className="app-root">
    <Helmet titleTemplate={`%s | Xavier Vilà - frontend developer`} defaultTitle="Xavi Vilà - frontend developer" >
      <link rel="canonical" href="http://xaviervila.tech" />
      <meta name="description" content="Personal page of Xavier Vilà" />
    </Helmet>
    <Routes />
  </div>

export default App
