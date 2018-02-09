// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom' 

import Loader from '../components/Loader'
import ShowMsg from '../components/ShowMsg'
import ButtonBack from '../components/ButtonBack'
import { loadProjectData } from '../actions/projectActionCreators'
import { getSlug } from '../utils/helpers'

class Projects extends React.Component {
  state = {
    slug: ''
  }

  props: {
    projects: Data,
    dispatch: Function
  }

  componentDidMount() {
    const { projects, dispatch } = this.props
    
    if (projects.data.length === 0) {
       dispatch(loadProjectData())
    } else {
      this.setSlug(projects.data)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps.projects

    if (data && data.length) {
      this.setSlug(data)
    }
  }

  setSlug(data) {
    const url = getSlug(String(`${data[0].title} ${data[0]._id}`))
    this.setState({ slug: url })
  }

  render() {
    const { message, error } = this.props.projects
    const { slug } = this.state

    if (slug) {
      return (
        <Redirect to={`projects/${slug}`} />
      )
    }

    return (
      <div className="app-view app-view-centered">
        <Loader msg={message} />
      </div>
    )  
  }
}
  
const mapStateToProps = state => ({ projects: state.projects })

export default connect(mapStateToProps)(Projects)