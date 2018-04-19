// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Background from '../components/Background'
import Stats from '../components/Stats'
import { getDictionary } from '../utils/dictionary'

type Props = {
  location: Object,
  language: Object
}

const Landing = ({ location, language }: Props)  => {
  
  const DIC = getDictionary(language.current)

  return (
    <section className="app-view app-view-centered">
      <Helmet 
        title={`${DIC.WELCOME} xaviervila.tech`}
        meta={[
          { name:"description", content: `${DIC.DESCRIPTION}` },
          { property: "og:title", content: `${DIC.WELCOME} xaviervila.tech` }
        ]}
      />
      <Background title="Landing page" />
      <Stats DIC={DIC} />
    </section>
  ) 
}

const mapStateToProps = state => ({ language: state.language })

export const Unwrapped = Landing
export default connect(mapStateToProps)(Landing)