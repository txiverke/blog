// @flow

import { combineReducers } from 'redux'

import * as ACTION from './actions'

const user = (
  state = {
    completed: false,
    data: [],
    message: ''
  }, 
  action
) => {
  switch(action.type) {
    case ACTION.LOAD_USER_DATA_REQUEST:
      return Object.assign({}, state, { 
        completed: false, 
        message: 'Loading User Data.' 
      })
    case ACTION.LOAD_USER_DATA_SUCCESS:
      return Object.assign({}, state, { 
        completed: true, 
        data: action.payload, 
        message: ''
      })
    case ACTION.LOAD_USER_DATA_FAILURE:
      return Object.assign({}, state, { 
        completed: true, 
        message: 'Something went wrong!' 
      })
    default:
      return state
  }
}

const login = (
  state = { 
    completed: false,
    token: '',
    message: ''
  },
  action,
) => {
  switch(action.type) {
    case ACTION.LOG_IN_USER_REQUEST:
      return Object.assign({}, state, { 
        completed: false, 
        message: 'User Authenticating.' 
      })
    case ACTION.LOG_IN_USER_SUCCESS:
      return Object.assign({}, state, { 
        completed: true, 
        token: action.payload, 
        message: ''
      })
    case ACTION.LOG_IN_USER_FAILURE:
      return Object.assign({}, state, { 
        completed: true, 
        message: 'Authentication denied.' 
      })
    default:
      return state
  }
}


export default combineReducers({ user, login })
