// @flow

import { combineReducers } from 'redux'

import * as ACTION from './actions'

const newState = (state, ...args) => 
  Object.assign({}, state, {
    completed: args[0],
    data: args[1],
    message: args[2]
  })

const statistic = (
  state = {
    completed: false,
    data: {},
    message: ''
  }, action
) => {
  switch (action.type) {
    case ACTION.LOAD_STATS_REQUEST: return newState(state, false, state.data, 'Loading statistics.')
    case ACTION.LOAD_STATS_SUCCESS: return newState(state, true, action.payload, 'Statistics loaded.')
    case ACTION.LOAD_STATS_FAILURE: return newState(state, true, state.data, 'Statistics failed.')
    default: return state
  }
}

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
        message: 'User data loaded.'
      })
    case ACTION.LOAD_USER_DATA_FAILURE:
      return Object.assign({}, state, { 
        completed: true, 
        message: 'Something went wrong.' 
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
        message: 'User Authenticated.'
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


export default combineReducers({ statistic, user, login })
