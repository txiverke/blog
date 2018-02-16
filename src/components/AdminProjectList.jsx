// @flow

import React from 'react'
import { connect } from 'react-redux'

import AdminList from '../containers/AdminList'
import AdminProjectItem from '../components/AdminProjectItem'
import ShowMsg from './ShowMsg'
import Loader from './Loader'
import { loadProjectData } from '../actions/projectActionCreators'

class AdminProjectList extends React.Component {
  
  createPost = this.createPost.bind(this)

  props: {
    dispatch: Function,
    projects: Data,
    handleCreateProject: Function
  }

  componentDidMount() {
    const { dispatch, projects } = this.props
    
    if (projects.data && projects.data.length === 0) {
      dispatch(loadProjectData())
    }
  }

  createPost(obj: Object) {
    this.props.handleCreateProject(obj)
  }

  render() {
    const { data, completed, message, error } = this.props.projects

    if (completed) {
      return (
        <div className="app-content-grid"> 
          <ShowMsg message={message} error={error} next={true} />
          <AdminProjectItem label="Create Project" handleProject={this.createPost} />
          <AdminList type="projects" data={data} />
        </div>
      )
    }

    return <Loader msg={message} />
  }
}

export default connect()(AdminProjectList)