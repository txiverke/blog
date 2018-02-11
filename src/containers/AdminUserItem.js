// @flow

import { connect } from 'react-redux'

import AdminUserItem from '../components/AdminUserItem'
import { updateUserData } from '../actions/userActionCreators'


const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = dispatch => 
  ({ handleClick: (obj: Object) => dispatch(updateUserData(obj)) })

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserItem)
