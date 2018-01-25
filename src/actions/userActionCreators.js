// flow

import * as ACTION from './actionsType'
import config from '../config'
import { handleToken } from '../utils/helpers'

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
      handleToken.tokens = JSON.stringify(data.token)
      dispatch(loginUserSuccess(data.token))
      dispatch(isAuthenticatedSuccess(data.token))
      return dispatch(loadUserData(config.api.profileId))
    } catch (err) {
      console.log(err)
      dispatch(loginUserFailure())
    }
  }

/** AUTHENTICATE USER  */
export const isAuthenticatedRequest = () => ({ type: ACTION.IS_AUTHENTICATED_REQUEST })
export const isAuthenticatedSuccess = (payload: string) => ({ type: ACTION.IS_AUTHENTICATED_SUCCESS, payload })
export const isAuthenticatedFailure = () => ({ type: ACTION.IS_AUTHENTICATED_FAILURE})

export const isAuthenticated = () => 
  (dispatch: Function) => {
    handleToken.tokens
    const token: ?string = handleToken.tokens
    dispatch(isAuthenticatedRequest())

    if (token) {
      dispatch(isAuthenticatedSuccess(token))
      return dispatch(loadUserData(config.api.profileId))
    }

    return dispatch(isAuthenticatedFailure())
  }

/** LOGOUT USER */
export const logoutUserRequest = () => ({ type: ACTION.LOG_OUT_USER_REQUEST })
export const logoutUserSuccess = () => ({ type: ACTION.LOG_OUT_USER_SUCCESS })
export const logoutUserFailure = () => ({ type: ACTION.LOG_OUT_USER_FAILURE })

export const logoutUser = () => (dispatch: Function) => {
  const token = handleToken.tokens
  dispatch(logoutUserRequest())

  if (token) {
    handleToken.remove()
    dispatch(logoutUserSuccess())
    return dispatch((isAuthenticated()))
  }

  return dispatch(logoutUserFailure())
}

/** LOAD USER DATA **/
export const loadUserDataRequest = () => ({ type: ACTION.LOAD_USER_DATA_REQUEST })
export const loadUserDataSuccess = (payload: Object) => ({ type: ACTION.LOAD_USER_DATA_SUCCESS, payload })
export const loadUserDataFailure = () => ({ type: ACTION.LOAD_USER_DATA_FAILURE })

export const loadUserData = (id: string) =>
  async (dispatch: Function) => {
    const token: ?string = handleToken.tokens
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

/** UPLOAD USER DATA **/
export const uploadUserDataRequest = () => ({ type: ACTION.UPLOAD_USER_DATA_REQUEST })
export const uploadUserDataSuccess = (payload: Object) => ({ type: ACTION.UPLOAD_USER_DATA_SUCCESS, payload })
export const uploadUserDataFailure = () => ({ type: ACTION.UPLOAD_USER_DATA_FAILURE })

export const uploadUserData = (id: string, obj: Object) =>
  async (dispatch: Function) => {
    const token: ?string = handleToken.tokens
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