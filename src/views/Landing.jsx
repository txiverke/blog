// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Background from '../components/Background'
import Loading from '../components/Loading'
import { getSlug, normalizeVal } from '../utils/helpers'
import { loadStats } from '../actionCreators'

const sections = [
  { name: 'About me' },
  { name: 'Posts' },
  { name: 'Projects' }
]

class Landing extends React.Component {
  props: {
    match: Object,
    location: Object,
    history: Object,
    staticContext: any,
    dispatch: Function,
    statistic: Object,
  }
  componentDidMount() {
    const { dispatch, statistic } = this.props

    if (Object.keys(statistic.data).length === 0) {
      dispatch(loadStats())
    }
  }

  render() {
    const completed = this.props.statistic.completed
    const getValue = (section) => {
      const { users, posts } = this.props.statistic.data

      switch (section) {
        case 'about-me': return normalizeVal(users)
        case 'posts': return normalizeVal(posts)
        default: return '00'
      }
    }

    if (completed) {
      return (
        <section className="app-view">
          <Helmet title="Welcome!" />
          <Background title="Just a tes of bg" name="bg_1.png" {...this.props} />
          <div className="app-content">
          {sections.map(item => {
            const name = getSlug(item.name)
            return (
              <article key={item.name} className="app-content-landing">
                <h2>
                  <Link to={name}>
                    <span>{getValue(name)}</span>
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

    return <Loading msg={this.props.statistic.message} />
  }
}

const mapStateToProps = state => ({ statistic: state.statistic })

export default connect(mapStateToProps)(Landing)