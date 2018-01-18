// @flow

import React from 'react'
import Helmet from 'react-helmet'

const Posts = () => 
  <div className="app-view">
    <Helmet 
      title="Posts" 
      meta={[
        { name:"description", content: "Posts about Frontend development" },
        { property: "og:title", content: "Posts about Frontend development" },
      ]}
    />
    <h1>Posts</h1>
  </div>

export default Posts