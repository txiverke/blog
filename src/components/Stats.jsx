// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Loader from '../components/Loader'
import { normalizeVal } from '../utils/helpers'
import { loadStats } from '../actions/statsActionCreators'

const sections = [{ url: 'about-me' }, { url: 'posts' }, { url: 'projects'}]

class Stats extends React.PureComponent {
  props: {
    dispatch: Function,
    statistic: Statistic,
    authenticate: Auth,
    DIC: Object
  }

  componentDidMount() {
    const { dispatch, statistic, authenticate } = this.props

    if (Object.keys(statistic.data).length === 0 || authenticate.data) {
      dispatch(loadStats())
    }
  }


  getValue(section: string) {
    const { data } = this.props.statistic
    const users = data.users ? data.users : '0'
    const posts = data.posts ? data.posts : '0'
    const projects = data.projects ? data.projects : '0'

    switch (section) {
      case 'about-me': return normalizeVal(users)
      case 'posts': return normalizeVal(posts)
      case 'projects': return normalizeVal(projects)
      default: return '00'
    }
  }

  render() {
    const { authenticate, statistic, DIC } = this.props
    const url = authenticate.data ? '/admin': ''
    const label = authenticate.data ? DIC.EDIT : ''

    if (statistic.completed) {
      return (
        <div className="app-content">
        {sections.map(item => {
          const title = DIC[item.url.toUpperCase()]
          
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

export const Unwrapped = Stats
export default connect(mapStateToProps)(Stats)