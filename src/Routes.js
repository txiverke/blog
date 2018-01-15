// @flow

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RoutesAsync from './RoutesAsync'

import About from './views/About'
import Posts from './views/Posts'
import Projects from './views/Projects'
import NotFound from './views/NotFound'

const Routes = () => (
  <Switch>
    <Route 
      exact 
      path="/" 
      component={props =>(
        <RoutesAsync props={props} loadingPromise={import('./views/Landing')} />
      )} />
    <Route 
      path="/about-me" component={About} />
    <Route path="/posts" component={Posts} />
    <Route path="/projects" component={Projects} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes