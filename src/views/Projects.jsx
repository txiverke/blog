// @flow

import React from 'react'
import Helmet from 'react-helmet'

const Projects = () =>
  <div className="app-view">
    <Helmet 
      title="Projects" 
      meta={[
        { name:"description", content: "Personal projects in which I am working currently." },
        { property: "og:title", content: "Personal projects of Xavi Vilà" },
      ]}
    />
    <h1>Projects</h1>
  </div>

export default Projects