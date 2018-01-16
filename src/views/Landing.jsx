// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import Background from '../components/Background'
import { getSlug } from '../utils/helpers'

type Props = {
  name: string,
  title: string,
  match: Object,
  location: Object,
  history: Object,
  staticContext: any
}

const sections = [
  { name: 'About me', number: '01' },
  { name: 'Posts', number: '05' },
  { name: 'Projects', number: '02' }
]

const Landing = (props: Props) =>
  <section className="app-view">
    <Helmet title="Welcome!" />
    <Background title="Just a tes of bg" name="bg_1.png" {...props} />
    <div className="app-content">
    {sections.map(item => 
      <article key={item.name} className="app-content-landing">
        <h2>
          <Link to={getSlug(item.name)}>
            <span>{item.number}</span>
            <span className="bold">{item.name.toUpperCase()}</span>
          </Link>
        </h2>
      </article>
    )}
    </div>
  </section>

export default Landing