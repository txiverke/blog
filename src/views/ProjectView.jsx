// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import Loader from '../components/Loader'
import ButtonBack from '../components/ButtonBack'
import { loadProjectData } from '../actions/projectActionCreators'
import { getItem, getSlug } from '../utils/helpers'

class ProjectView extends React.PureComponent {
  state = {
    data: {},
    next: '',
    prev: '',
    notFound: false,
  }

  props: {
    dispatch: Function,
    match: Object,
    projects: Data
  }

  componentDidMount() {
    const { dispatch } = this.props
    const { data } = this.props.projects

    if (data.length === 0) {
      dispatch(loadProjectData())
    } else {
      const id = getItem(this.props.match.params.id, '-')
      this.getData(data, id)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps.projects

    if (data && data.length) {
      const id = getItem(this.props.match.params.id, '-')
      this.getData(data, id)
    }
  }

  getData(data: Array<Object>, id: string) {
    const result = data.filter(item => item._id === id)
    const index = data.map(item => item._id).indexOf(id)

    if (index !== -1) {
      const next = data.length === index + 1 ? 0 : index + 1
      const prev = index === 0 ? data.length - 1 : index - 1

      this.setState({ 
        data: result[0],
        next: getSlug(String(`${data[next].title} ${data[next]._id}`)),
        prev: getSlug(String(`${data[prev].title} ${data[prev]._id}`)),
      })
    } else {
      this.setState({ notFound: true})
    }
  }

  render() {
    const { message } = this.props.projects
    const { data, next, prev, notFound } = this.state

    if (data && !notFound) {
      return (
        <div className="app-view">
          <Helmet 
            title={data.title} 
            meta={[
              { name:"description", content: data.title },
              { property: "og:title", content: data.title }
            ]}
          />
          <ButtonBack />
          {data.title}
          <Link to={next}>Next</Link>
          <Link to={prev}>Prev</Link>
        </div>
      )
    } else if(data && notFound) {
      return <Redirect to="/projects" />
    }

    return (
      <div className="app-view app-view-centered">
        <Loader msg={message} />
      </div>
    )  
  } 
}

const mapStateToProps = state => ({ projects: state.projects})

export default connect(mapStateToProps)(ProjectView)