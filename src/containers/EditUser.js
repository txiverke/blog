// @flow

import { connect } from 'react-redux'

import EditUser from '../components/EditUser'
import { uploadUserData } from '../actionCreators'


const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  handleClick: (id: string, obj: Object) => dispatch(uploadUserData(id, obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
