// @flow

import AdminList from '../components/AdminList'
import { connect } from 'react-redux'

import { removePostData } from '../actions/postActionCreators'
import { removeProjectData } from '../actions/projectActionCreators'

const mapDispatchToProps = (dispatch: Function) => ({
  handleRemove: (type: string, id: string) => {
    switch(type) {
      case 'posts': return dispatch(removePostData(id))
      case 'projects': return dispatch(removeProjectData(id))
      default: return false
    }
  }
})

export default connect(null, mapDispatchToProps)(AdminList)