// @flow

import { connect } from 'react-redux'

import { loginUser } from '../actionCreators'
import SignInForm from '../components/SignInForm'

const mapStateToProps = (state: Object) => ({
  message: state.authenticate.message
})

const mapDispatchToProps = (dispatch: Function) => ({
  handleClick: (obj: Object) => dispatch(loginUser(obj)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)