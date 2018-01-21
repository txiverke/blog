// @flow

import { connect } from 'react-redux'

// @flow

import { loginUser } from '../actionCreators'
import SignInForm from '../components/SignInForm'

const mapStateToProps = (state: Object) => ({
  authenticate: state.authenticate
})

const mapDispatchToProps = (dispatch: Function) => ({
  handleClick: (obj: Object) => dispatch(loginUser(obj)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)