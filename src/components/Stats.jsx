// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Loader from '../components/Loader'
import { normalizeVal } from '../utils/helpers'
import { loadStats } from '../actions/statsActionCreators'

const sections = [
  { name: 'About me', url: 'about-me' },
  { name: 'Posts', url:'posts' },
  { name: 'Projects', url:'projects'}
]

class Stats extends React.Component {
  props: {
    dispatch: Function,
    statistic: Statistic,
    authenticate: Auth
  }
  componentDidMount() {
    const { dispatch, statistic } = this.props

    if (Object.keys(statistic.data).length === 0) {
      dispatch(loadStats())
    }
    
  }
  getValue(section) {
    const { users, posts, projects } = this.props.statistic.data

    switch (section) {
      case 'about-me': return normalizeVal(users)
      case 'posts': return normalizeVal(posts)
      case 'projects': return normalizeVal(projects)
      default: return '00'
    }
  }

  render() {
    const { authenticate, statistic } = this.props
    const url = authenticate.data ? '/admin': ''
    const label = authenticate.data ? 'EDIT' : ''
    

    if (statistic.completed) {
      return (
        <div className="app-content">
        {sections.map(item => {
          const title = item.name.toUpperCase()
          return (
            <article key={item.url} className="app-content-landing">
              <h2>
                <Link to={`${url}/${item.url}`}>
                  <span>{this.getValue(item.url)}</span>
                  <span className="bold">{`${label} ${title}`}</span>
                </Link>
              </h2>
            </article>
          )
        })}
        </div> 
      )
    }
    
    return <Loader msg={this.props.statistic.message} />
  }
}

const mapStateToProps = (state: Object) => ({ 
  statistic: state.statistic,
  authenticate: state.authenticate 
})

export default connect(mapStateToProps)(Stats)