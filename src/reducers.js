// @flow

import { combineReducers } from 'redux'

import * as ACTION from './actions/actionsType'
import { getLanguage } from './utils/helpers'

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
  state: Item = {
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
    case ACTION.UPDATE_USER_DATA_REQUEST: return newState(state, false, [], 'Updating User Data')
    case ACTION.UPDATE_USER_DATA_SUCCESS: return newState(state, true, action.payload, 'User data updated.')
    case ACTION.UPDATE_USER_DATA_FAILURE: return newState(state, true, [], 'Update users failed.', true)
    
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
    case ACTION.LOAD_POST_DATA_REQUEST: return newState(state, false, [], 'Loading posts.')
    case ACTION.LOAD_POST_DATA_SUCCESS: return newState(state, true, action.payload, 'Posts loaded.')
    case ACTION.LOAD_POST_DATA_FAILURE: return newState(state, true, [], 'Ups, get posts failed.', true)
    case ACTION.CREATE_POST_DATA_REQUEST: return newState(state, false, [], 'Creating a new post.')
    case ACTION.CREATE_POST_DATA_SUCCESS: return newState(state, true, action.payload, 'Post created')
    case ACTION.CREATE_POST_DATA_FAILURE: return newState(state, true, [], 'Create post failed.', true)
    case ACTION.UPDATE_POST_DATA_REQUEST: return newState(state, false, [], 'Updating a new post.')
    case ACTION.UPDATE_POST_DATA_SUCCESS: return newState(state, true, action.payload, 'Post updated')
    case ACTION.UPDATE_POST_DATA_FAILURE: return newState(state, true, [], 'Update post failed.', true)
    case ACTION.REMOVE_POST_DATA_REQUEST: return newState(state, false, [], 'Removing post.')
    case ACTION.REMOVE_POST_DATA_SUCCESS: return newState(state, true, action.payload, 'Post removed.')
    case ACTION.REMOVE_POST_DATA_FAILURE: return newState(state, true, [], 'Remove post failed.', true)
    default: return state
  }
}

const item = (
  state: Item = {
    completed: false,
    data: {},
    message: '',
    error: false
  },
  action: Action
) => {
  switch(action.type) {
    case ACTION.LOAD_POST_ITEM_REQUEST: return newState(state, false, {}, 'Loading post.')
    case ACTION.LOAD_POST_ITEM_SUCCESS: return newState(state, true, action.payload, 'Post loaded.')
    case ACTION.LOAD_POST_ITEM_FAILURE: return newState(state, true, {}, 'Get post failed.', true)
    case ACTION.UPDATE_POST_ITEM_SUCCESS: return newState(state, true, state.data, 'Post updated properly.')
    case ACTION.LOAD_PROJECT_ITEM_REQUEST: return newState(state, false, {}, 'Loading project.')
    case ACTION.LOAD_PROJECT_ITEM_SUCCESS: return newState(state, true, action.payload, 'Project loaded.')
    case ACTION.LOAD_PROJECT_ITEM_FAILURE: return newState(state, true, {}, 'Get project failed.', true)
    case ACTION.UPDATE_PROJECT_ITEM_SUCCESS: return newState(state, true, state.data, 'Project updated properly.')
    default: return state
  }
}

const projects = (
  state: Data = {
    completed: false,
    data: [],
    message: '',
    error: false
  },
  action: Action
) => {
  switch(action.type) {
    case ACTION.LOAD_PROJECT_DATA_REQUEST: return newState(state, false, [], 'Loading projects.')
    case ACTION.LOAD_PROJECT_DATA_SUCCESS: return newState(state, true, action.payload, 'Projects loaded.')
    case ACTION.LOAD_PROJECT_DATA_FAILURE: return newState(state, true, [], 'Get projects failed.', true)
    case ACTION.CREATE_PROJECT_DATA_REQUEST: return newState(state, false, [], 'Creating a new project.')
    case ACTION.CREATE_PROJECT_DATA_SUCCESS: return newState(state, true, action.payload, 'Project created')
    case ACTION.CREATE_PROJECT_DATA_FAILURE: return newState(state, true, [], 'Create project failed.', true)
    case ACTION.UPDATE_PROJECT_DATA_REQUEST: return newState(state, false, [], 'Updating a new project.')
    case ACTION.UPDATE_PROJECT_DATA_SUCCESS: return newState(state, true, action.payload, 'Project updated')
    case ACTION.UPDATE_PROJECT_DATA_FAILURE: return newState(state, true, [], 'Update project failed.', true)
    case ACTION.REMOVE_PROJECT_DATA_REQUEST: return newState(state, false, [], 'Removing project.')
    case ACTION.REMOVE_PROJECT_DATA_SUCCESS: return newState(state, true, action.payload, 'Project removed.')
    case ACTION.REMOVE_PROJECT_DATA_FAILURE: return newState(state, true, [], 'Remove project failed.', true)
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

const tags = (
  state: Tag = {
    completed: false,
    data: [],
    message: '',
    error: false
  }, action: Action) => {
  switch(action.type) {
    case ACTION.CHECK_POSTS_TAGS_REQUEST: return newState(state, false, '', 'Checking tags.')
    case ACTION.CHECK_POSTS_TAGS_SUCCESS: return newState(state, true, action.payload, 'Tags checked.')
    case ACTION.CHECK_POSTS_TAGS_FAILURE: return newState(state, true, '', 'Check tags failed.', true)
    default: return state
  }
}


const language = ( state: Object = { current: getLanguage() }, action: Action) => {
  switch(action.type) {
    case ACTION.UPDATE_APP_LANGUAGE: return Object.assign({}, state, { current: action.payload })
    default: return state
  }
}

export default combineReducers({ 
  statistic, 
  user, 
  posts,
  item,
  projects,
  authenticate, 
  tags,
  language
})
