// @flow

import { connect } from 'react-redux'

import EditUser from '../components/EditUser'
import { uploadUserData } from '../actions/userActionCreators'


const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  handleClick: (id: string, obj: Object) => dispatch(uploadUserData(id, obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
