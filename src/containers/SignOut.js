// @flow

import { connect } from 'react-redux'

import { logoutUser } from '../actionCreators'
import SignOut from '../components/SignOut'

const mapStateToProps = (state: Object) => ({
  label: 'Sign Out',
  message: state.authenticate.message
})

const mapDispatchToProps = (dispatch: Function) => ({
  handleClick: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)