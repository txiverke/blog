// @flow

import React from 'react'
import Helmet from 'react-helmet'

import Background from '../components/Background'
import Stats from '../components/Stats'

type Props = {
  location: Object,
}

const Landing = ({ location }: Props) => (
  <section className="app-view app-view-centered">
    <Helmet 
      title="Welcome!" 
      meta={[
        { name:"description", content: "Welcome to xaviervila.tech" },
        { property: "og:title", content: "Landing page of xaviervila.tech" }
      ]}
    />
    <Background title="Landing page" />
    <Stats />
  </section>
) 

export default Landing