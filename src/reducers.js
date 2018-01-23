// @flow

import { combineReducers } from 'redux'

import * as ACTION from './actions'

const newState = (state, ...args) => 
  Object.assign({}, state, {
    completed: args[0],
    data: args[1],
    message: args[2],
    error: args[3] || false
  })

const statistic = (
  state: Statistic = {
    completed: false,
    data: {},
    message: '',
    error: false
  }, action: Action
) => {
  switch (action.type) {
    case ACTION.LOAD_STATS_REQUEST: return newState(state, false, {}, 'Loading statistics.')
    case ACTION.LOAD_STATS_SUCCESS: return newState(state, true, action.payload, 'Statistics loaded.')
    case ACTION.LOAD_STATS_FAILURE: return newState(state, true, {}, 'Statistics failed.', true)
    default: return state
  }
}

const user = (
  state: User = {
    completed: false,
    data: {},
    message: '',
    error: false
  }, 
  action: Action
) => {
  switch(action.type) {
    case ACTION.LOAD_USER_DATA_REQUEST: return newState(state, false, [], 'Loading User Data')
    case ACTION.LOAD_USER_DATA_SUCCESS: return newState(state, true, action.payload, 'User data loaded.')
    case ACTION.LOAD_USER_DATA_FAILURE: return newState(state, true, [], 'Get users failed.', true)
    case ACTION.UPLOAD_USER_DATA_REQUEST: return newState(state, false, [], 'Uploading User Data')
    case ACTION.UPLOAD_USER_DATA_SUCCESS: return newState(state, true, action.payload, 'User data uploaded.')
    case ACTION.UPLOAD_USER_DATA_FAILURE: return newState(state, true, [], 'Upload users failed.', true)
    
    default: return state
  }
}

const posts = (
  state: Data = {
    completed: false,
    data: [],
    message: '',
    error: false
  }, 
  action: Action
) => {
  switch(action.type) {
    case ACTION.LOAD_POST_DATA_REQUEST: return newState(state, false, [], 'Loading post Data')
    case ACTION.LOAD_POST_DATA_SUCCESS: return newState(state, true, action.payload, 'Post data loaded.')
    case ACTION.LOAD_POST_DATA_FAILURE: return newState(state, true, [], 'Get posts failed.', true)
    case ACTION.REMOVE_POST_DATA_REQUEST: return newState(state, false, [], 'Removing post.')
    case ACTION.REMOVE_POST_DATA_SUCCESS: return newState(state, true, action.payload, 'Post removed.')
    case ACTION.REMOVE_POST_DATA_FAILURE: return newState(state, true, [], 'Remove post failed.', true)
    default: return state
  }
}

const authenticate = (
  state: Auth = { 
    completed: false,
    data: '',
    message: '',
    error: false
  },
  action: Action,
) => {
  switch(action.type) {
    case ACTION.LOG_IN_USER_REQUEST: return newState(state, false, '', 'Login user.')
    case ACTION.LOG_IN_USER_SUCCESS: return newState(state, true, action.payload, 'User logged.')
    case ACTION.LOG_IN_USER_FAILURE: return newState(state, true, '', 'Login denied.', true)
    case ACTION.IS_AUTHENTICATED_REQUEST: return newState(state, false, '', 'Authenticating user.')
    case ACTION.IS_AUTHENTICATED_SUCCESS: return newState(state, true, action.payload, 'User authenticated.')
    case ACTION.IS_AUTHENTICATED_FAILURE: return newState(state, true, '', 'Authentication denied.', true)
    case ACTION.LOG_OUT_USER_REQUEST: return newState(state, false, '', 'Login out user.')
    case ACTION.LOG_OUT_USER_SUCCESS: return newState(state, true, '', 'User Log out.')
    case ACTION.LOG_OUT_USER_FAILURE: return newState(state, true, '', 'Log out denied.', true)
    default: return state
  }
}

export default combineReducers({ 
  statistic, 
  user, 
  posts,
  authenticate, 
})
