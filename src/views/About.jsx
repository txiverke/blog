// @flow

import React from 'react'
import Helmet from 'react-helmet'

import avatar from '../assets/imgs/about.jpg'

type Props = {
  match: Object,
  location: Object,
  history: Object,
  staticContext: any
}

const About = (props: Props) => 
  <section className="app-view">
    <Helmet title="About me" />
    <article className="app-content">
      <figure>
        <img
          className="roundedImg"
          src={avatar} alt="A pic of Xavi Vilà" />
      </figure>
      <h2>Xavier Vilà</h2>
      <h3>frondend developer</h3>
      <p>Versatile Front-end Developer with lots of experience in HTML
        and CSS implementation, Cross-browser and Responsive design.
        Wide range of professional experience in j avascript using several
        frameworks, libraries and vanilla js. Experience in agile working
        environments and Scrum methodology.</p>
    </article>
  </section>

export default About