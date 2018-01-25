// @flow

import { connect } from 'react-redux'

import EditUser from '../components/EditUser'
import { updateUserData } from '../actions/userActionCreators'


const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  handleClick: (id: string, obj: Object) => dispatch(updateUserData(id, obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
