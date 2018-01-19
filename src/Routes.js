// @flow

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RoutesAsync from './RoutesAsync'

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={props => (
        <RoutesAsync props={props} loadingPromise={import('./views/Landing')} />
      )} />
    <Route
      path="/about-me"
      component={props => (
        <RoutesAsync props={props} loadingPromise={import('./views/About')} />
      )} />
    <Route
      path="/posts"
      component={props => (
        <RoutesAsync props={props} loadingPromise={import('./views/Posts')} />
      )} />
    <Route
      path="/projects"
      component={props => (
        <RoutesAsync props={props} loadingPromise={import('./views/Projects')} />
      )} />
    <Route 
      path="/admin/about-me"
      component={props => (
        <RoutesAsync props={props} loadingPromise={import('./views/AdminAbout')} />
      )} />
    <Route 
      path="/admin/posts"
      component={props => (
        <RoutesAsync props={props} loadingPromise={import('./views/AdminPosts')} />
      )} />
    <Route 
      path="/admin/projects"
      component={props => (
        <RoutesAsync props={props} loadingPromise={import('./views/AdminProjects')} />
      )} />
    <Route 
      path="/admin"
      component={props => (
        <RoutesAsync props={props} loadingPromise={import('./views/Admin')} />
      )} />
    <Route
      path="/sign-in"
      component={props => (
        <RoutesAsync props={props} loadingPromise={import('./views/SignIn')} />
      )} />
    <Route
      component={props => (
        <RoutesAsync props={props} loadingPromise={import('./views/NotFound')} />
      )} />
  </Switch>
)

export default Routes