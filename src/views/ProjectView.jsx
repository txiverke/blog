// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Loader from '../components/Loader'
import { loadProjectData } from '../actions/projectActionCreators'
import { getItem } from '../utils/helpers'

class ProjectView extends React.PureComponent {
  state = {
    data: {}
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
    const result = data.filter( item => item._id === id)
    this.setState({ data: result[0] })
  }

  render() {
    const { message } = this.props.projects
    const { data } = this.state

    if (data) {
      return (
        <div className="app-view">{data.title}</div>
      )
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