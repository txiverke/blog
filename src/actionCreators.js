// @flow

import * as ACTION from './actions'
import config from './config'
import { handleToken } from './utils/helpers'

/** LOAD APP STATISTICS */
export const loadStatsRequest = () => ({ type: ACTION.LOAD_STATS_REQUEST })
export const loadStatsSuccess = (payload: Object) => ({ type: ACTION.LOAD_STATS_SUCCESS, payload })
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
export const loadUserDataSuccess = (payload: Object) => ({ type: ACTION.LOAD_USER_DATA_SUCCESS, payload })
export const loadUserDataFailure = () => ({ type: ACTION.LOAD_USER_DATA_FAILURE })

export const loadUserData = (id: string) =>
  async (dispatch: Function) => {
    const token: ?string = handleToken.get()
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
export const uploadUserDataSuccess = (payload: Object) => ({ type: ACTION.UPLOAD_USER_DATA_SUCCESS, payload })
export const uploadUserDataFailure = () => ({ type: ACTION.UPLOAD_USER_DATA_FAILURE })

export const uploadUserData = (id: string, obj: Object) =>
  async (dispatch: Function) => {
    const token: ?string = handleToken.get()
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
export const loginUserSuccess = (payload: Object) => ({ type: ACTION.LOG_IN_USER_SUCCESS, payload })
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
      handleToken.set(JSON.stringify(data.token))
      dispatch(loginUserSuccess(data.token))
      return dispatch(isAuthenticatedSuccess(data.token))

    } catch (err) {
      dispatch(loginUserFailure())
    }
  }

/** AUTHENTICATE USER  */
export const isAuthenticatedRequest = () => ({ type: ACTION.IS_AUTHENTICATED_REQUEST })
export const isAuthenticatedSuccess = (payload: string) => ({ type: ACTION.IS_AUTHENTICATED_SUCCESS, payload })
export const isAuthenticatedFailure = () => ({ type: ACTION.IS_AUTHENTICATED_FAILURE})

export const isAuthenticated = () => 
  (dispatch: Function) => {
    const token: ?string = handleToken.get()
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
  const token = handleToken.get()
  dispatch(logoutUserRequest())

  if (token) {
    handleToken.remove()
    dispatch(logoutUserSuccess())
    return dispatch((isAuthenticated()))
  }

  return dispatch(logoutUserFailure())
}

/** LOAD POST DATA */
export const loadPostDataRequest = () => ({ type: ACTION.LOAD_POST_DATA_REQUEST })
export const loadPostDataSuccess = (payload: Array<Object>) => ({
  type: ACTION.LOAD_POST_DATA_SUCCESS, payload
})
export const loadPostDataFailure = () => ({ type: ACTION.LOAD_POST_DATA_FAILURE })

export const loadPostData = () => 
  async (dispatch: Function) => {
    const token: ?string = handleToken.get()
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

    dispatch(loadPostDataRequest())
    try {
      const promise = await fetch(`${config.api.url}/posts`, options)
      const data = await promise.json()
      return dispatch(loadPostDataSuccess(data))
    } catch (err) {
      return dispatch(loadPostDataFailure())
    }

}

/** LOAD POST DATA */
export const removePostDataRequest = () => ({ type: ACTION.REMOVE_POST_DATA_REQUEST })
export const removePostDataSuccess = (payload: Array<Object>) => ({ type: ACTION.REMOVE_POST_DATA_SUCCESS, payload })
export const removePostDataFailure = () => ({ type: ACTION.REMOVE_POST_DATA_FAILURE})

export const removePostData = (id: string) => 
  async (dispatch: Function) => {
  const token: ?string = handleToken.get()
  const headers = new Headers({
    'Content-Type': 'application/json',
    'access_token': token || ''
  })
  const options = { 
    method: 'DELETE',
    headers,
    mode: 'cors',
    cache: 'default',
  }
  dispatch(removePostDataRequest())

  try {
    const promise = await fetch(`${config.api.url}/posts/${id}`, options)
    const data = await promise.json()
    return dispatch(removePostDataSuccess(data))
  } catch (err) {
    return dispatch(removePostDataFailure())
  }
}
