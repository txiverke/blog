// @flow

import * as ACTION from './actions'
import config from './config'

/** LOAD APP STATISTICS */
export const loadStatsRequest = () => ({ type: ACTION.LOAD_STATS_REQUEST })

export const loadStatsSuccess = (payload: Object) => ({
  type: ACTION.LOAD_STATS_SUCCESS, payload
})

export const loadStatsFailure = () => ({ type: ACTION.LOAD_STATS_FAILURE })

export const loadStats = () => 
  async (dispatch: Function) => {
    const headers = new Headers({ 'Content-Type': 'application/json' })
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
    const token: ?string = JSON.parse(localStorage.getItem('xavierVilaTechToken'))
    const headers = new Headers({
      'Content-Type': 'application/json',
      'access_token': token || ''
    })
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

/** LOAD USER DATA **/
export const uploadUserDataRequest = () => ({ type: ACTION.UPLOAD_USER_DATA_REQUEST })

export const uploadUserDataSuccess = (payload: Object) => ({ 
  type: ACTION.UPLOAD_USER_DATA_SUCCESS, payload 
})

export const uploadUserDataFailure = () => ({ type: ACTION.UPLOAD_USER_DATA_FAILURE })

export const uploadUserData = (id: string, obj: Object) =>
  async (dispatch: Function) => {
    console.log(id, obj)
    const token: ?string = JSON.parse(localStorage.getItem('xavierVilaTechToken'))
    const headers = new Headers({
      'Content-Type': 'application/json',
      'access_token': token || ''
    })
    const options = { 
      method: 'PUT',
      body: JSON.stringify(obj),
      headers,
      mode: 'cors',
      cache: 'default',
    }

    dispatch(uploadUserDataRequest())

    try {
      const promise = await fetch(`${config.api.url}/users/${id}`, options)
      const data = await promise.json()
      return dispatch(uploadUserDataSuccess(data))
    } catch (err) {
      return dispatch(uploadUserDataFailure())
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
    const headers = new Headers({ 'Content-Type': 'application/json' })

    dispatch(loginUserRequest())

    try {
      const promise = await fetch(config.api.auth, { 
        method: 'POST', 
        body: JSON.stringify(obj), 
        headers 
      })
      const data = await promise.json()
      localStorage.setItem('xavierVilaTechToken', JSON.stringify(data.token))
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
    const token: ?string = JSON.parse(localStorage.getItem('xavierVilaTechToken'))

    dispatch(isAuthenticatedRequest())

    if (token) {
      return dispatch(isAuthenticatedSuccess(token))
    }

    return dispatch(isAuthenticatedFailure())
  }

/** LOGOUT USER */

export const logoutUserRequest = () => ({ type: ACTION.LOG_OUT_USER_REQUEST })
export const logoutUserSuccess = () => ({ type: ACTION.LOG_OUT_USER_SUCCESS })
export const logoutUserFailure = () => ({ type: ACTION.LOG_OUT_USER_FAILURE })

export const logoutUser = () => (dispatch: Function) => {
  const token = localStorage.getItem('xavierVilaTechToken')
  dispatch(logoutUserRequest())

  if (token) {
    localStorage.removeItem('xavierVilaTechToken')
    dispatch(logoutUserSuccess())
    return dispatch((isAuthenticated()))
  }

  return dispatch(logoutUserFailure())
}