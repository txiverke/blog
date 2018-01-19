// @flow
import 'isomorphic-fetch'

import * as ACTION from './actions'
import config from './config'

const token: ?string = JSON.parse(localStorage.getItem('token'))
const headers = new Headers({
  'Content-Type': 'application/json',
  'access_token': token || ''
})

/** LOAD APP STATISTICS */
export const loadStatsRequest = () => ({ type: ACTION.LOAD_STATS_REQUEST })

export const loadStatsSuccess = (payload: Object) => ({
  type: ACTION.LOAD_STATS_SUCCESS, payload
})

export const loadStatsFailure = () => ({ type: ACTION.LOAD_STATS_FAILURE })

export const loadStats = () => 
  async (dispatch: Function) => {
    const options = { 
      method: 'GET',
      headers,
      mode: 'cors',
      cache: 'default',
    }

    dispatch(loadStatsRequest())

    try {
      const promise = await fetch(`${config.api.url}/statistic`, options)
      const data = await promise.json()
      return dispatch(loadStatsSuccess(data))
    } catch (err) {
      dispatch(loadStatsFailure())
    }
  } 

/** LOAD USER DATA **/
export const loadUserDataRequest = () => ({ type: ACTION.LOAD_USER_DATA_REQUEST })

export const loadUserDataSuccess = (payload: Object) => ({ 
  type: ACTION.LOAD_USER_DATA_SUCCESS, payload 
})

export const loadUserDataFailure = () => ({ type: ACTION.LOAD_USER_DATA_FAILURE })

export const loadUserData = (id: string) =>
  async (dispatch: Function) => {
    const options = { 
      method: 'GET',
      headers,
      mode: 'cors',
      cache: 'default',
    }

    dispatch(loadUserDataRequest())

    try {
      const promise = await fetch(`${config.api.url}/users/${id}`, options)
      const data = await promise.json()
      return dispatch(loadUserDataSuccess(data))
    } catch (err) {
      return dispatch(loadUserDataFailure())
    }
  }

/** LOGIN USER **/
export const loginUserRequest = () => ({ type: ACTION.LOG_IN_USER_REQUEST })
export const loginUserSuccess = (payload: Object) => ({
  type: ACTION.LOG_IN_USER_SUCCESS, payload
})
export const loginUserFailure = () => ({ type: ACTION.LOG_IN_USER_FAILURE})

export const loginUser = (obj: Object) =>
  async (dispatch: Function) => {
    dispatch(loginUserRequest())

    try {
      const promise = await fetch(config.api.auth, { 
        method: 'POST', 
        body: JSON.stringify(obj), 
        headers 
      })
      const data = await promise.json()
      localStorage.setItem('token', JSON.stringify(data.token))
      dispatch(loginUserSuccess(data.token))
      return dispatch(isAuthenticatedSuccess(data.token))

    } catch (err) {
      dispatch(loginUserFailure())
    }
  }

/** AUTHENTICATE USER  */

export const isAuthenticatedRequest = () => ({ type: ACTION.IS_AUTHENTICATED_REQUEST })

export const isAuthenticatedSuccess = (payload: string) => ({
  type: ACTION.IS_AUTHENTICATED_SUCCESS, payload
})

export const isAuthenticatedFailure = () => ({ type: ACTION.IS_AUTHENTICATED_FAILURE})

export const isAuthenticated = () => 
  (dispatch: Function) => {

    dispatch(isAuthenticatedRequest())
    
    if (token) {
      return dispatch(isAuthenticatedSuccess(token))
    }

    return dispatch(isAuthenticatedFailure())
  }