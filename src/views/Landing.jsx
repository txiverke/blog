// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Background from '../components/Background'
import { getSlug } from '../utils/helpers'
import { loadUserData } from '../actionCreators'

const sections = [
  { name: 'About me', number: '01' },
  { name: 'Posts', number: '05' },
  { name: 'Projects', number: '02' }
]

class Landing extends React.Component {
  props: {
    name: string,
    title: string,
    match: Object,
    location: Object,
    history: Object,
    staticContext: any,
    dispatch: Function,
    user: Object,
  }
  componentDidMount() {
    const { dispatch, user } = this.props

    if (user.data.length === 0 ) {
      dispatch(loadUserData())
    }  
  }

  render() {
    return (
      <section className="app-view">
        <Helmet title="Welcome!" />
        <Background title="Just a tes of bg" name="bg_1.png" {...this.props} />
        <div className="app-content">
        {sections.map(item => {
          const number = item.name === 'About me' ? `0${this.props.user.data.length}` : item.number
          return (
            <article key={item.name} className="app-content-landing">
              <h2>
                <Link to={getSlug(item.name)}>
                  <span>{number}</span>
                  <span className="bold">{item.name.toUpperCase()}</span>
                </Link>
              </h2>
            </article>
          )
        })}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Landing)