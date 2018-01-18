// @flow

import React from 'react'
import Helmet from 'react-helmet'

const SignIn = () => (
  <section className="app-view">
    <Helmet 
      title="Welcome!" 
      meta={[
        { name:"description", content: "Sign In to Admin page" },
        { property: "og:title", content: "Sign In to Admin page" }
      ]}
    />
    <article className="app-content">
      SIGNIN
    </article>
  </section>
)

export default SignIn