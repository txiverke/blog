// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom' 

import Loader from '../components/Loader'
import { loadProjectData } from '../actions/projectActionCreators'
import { getSlug } from '../utils/helpers'

type Props = {
  projects: Data,
  dispatch: Function
}

type State = {
  slug: string
}

class Projects extends React.Component<Props, State> {
  state: State = {
    slug: ''
  }

  props: Props

  componentDidMount() {
    const { projects, dispatch } = this.props
    
    if (projects.data.length === 0) {
       dispatch(loadProjectData())
    } else {
      this.setSlug(projects.data)
    }
  }

  componentWillReceiveProps(nextProps: Object) {
    const { data } = nextProps.projects

    if (data && data.length) {
      this.setSlug(data)
    }
  }

  setSlug(data: Array<Object>) {
    const url = getSlug(String(`${data[0].title} ${data[0]._id}`))
    this.setState({ slug: url })
  }

  render() {
    const { message } = this.props.projects
    const { slug } = this.state

    if (slug) { 
      return <Redirect to={`/projects/${slug}`} />
    }

    return (
      <div className="app-view app-view-centered">
        <Loader msg={message} />
      </div>
    )  
  }
}
  
const mapStateToProps = state => ({ projects: state.projects })

export const Unwrapped = Projects
export default connect(mapStateToProps)(Projects)