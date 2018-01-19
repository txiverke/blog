// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Background from '../components/Background'
import Loader from '../components/Loader'
import { getSlug, normalizeVal } from '../utils/helpers'
import { loadStats } from '../actionCreators'

const sections = [
  { name: 'About me' },
  { name: 'Posts' },
  { name: 'Projects' }
]

class Landing extends React.Component {
  props: {
    location: Object,
    dispatch: Function,
    statistic: Statistic,
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
      const { users, posts, projects } = this.props.statistic.data

      switch (section) {
        case 'about-me': return normalizeVal(users)
        case 'posts': return normalizeVal(posts)
        case 'projects': return normalizeVal(projects)
        default: return '00'
      }
    }

    if (completed) {
      return (
        <section className="app-view">
          <Helmet 
            title="Welcome!" 
            meta={[
              { name:"description", content: "Welcome to xaviervila.tech" },
              { property: "og:title", content: "Landing page of xaviervila.tech" }
            ]}
          />
          <Background title="Just a tes of bg" name="bg_1.png" location={this.props.location} />
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

    return <Loader msg={this.props.statistic.message} />
  }
}

const mapStateToProps = state => ({ statistic: state.statistic })

export default connect(mapStateToProps)(Landing)