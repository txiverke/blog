// @flow

import { connect } from 'react-redux'

import AdminProjectList from '../components/AdminProjectList'
import { createProjectData } from '../actions/projectActionCreators'

const mapStateToProps = state => ({ projects: state.projects })

const mapDispatchToProps = (dispatch: Function) => ({
  handleCreateProject: (obj: Object) => dispatch(createProjectData(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminProjectList)