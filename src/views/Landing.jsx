// @flow

import React from 'react'
import Helmet from 'react-helmet'

import Background from '../components/Background'
import Stats from '../components/Stats'

type Props = {
  location: Object,
}

const Landing = ({ location }: Props) => (
  <section className="app-view">
    <Helmet 
      title="Welcome!" 
      meta={[
        { name:"description", content: "Welcome to xaviervila.tech" },
        { property: "og:title", content: "Landing page of xaviervila.tech" }
      ]}
    />
    <Background title="Just a tes of bg" name="bg_1.png" location={location} />
    <Stats />
  </section>
) 

export default Landing