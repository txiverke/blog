// @flow

import * as ACTION from './actionsType'
import config from '../config'
import { handleToken, setPromise } from '../utils/helpers'

const URL = 'users'

/** LOGIN USER **/
export const loginUserRequest = () => ({ type: ACTION.LOG_IN_USER_REQUEST })
export const loginUserSuccess = (payload: Object) => ({ type: ACTION.LOG_IN_USER_SUCCESS, payload })
export const loginUserFailure = () => ({ type: ACTION.LOG_IN_USER_FAILURE})

export const loginUser = (obj: Object) =>
  async (dispatch: Function) => {
    dispatch(loginUserRequest())

    try {
      const promise = await fetch(config.api.auth, { 
        method: 'POST', 
        body: JSON.stringify(obj), 
        headers: new Headers({ 'Content-Type': 'application/json' })
      })
      const data = await promise.json()

      handleToken.set(JSON.stringify(data.token))
      dispatch(loginUserSuccess(data.token))
      return dispatch(isAuthenticatedSuccess(data.token))
    } catch (err) {
      return dispatch(loginUserFailure())
    }
  }

/** AUTHENTICATE USER  */
export const isAuthenticatedRequest = () => ({ type: ACTION.IS_AUTHENTICATED_REQUEST })
export const isAuthenticatedSuccess = (payload: string) => ({ type: ACTION.IS_AUTHENTICATED_SUCCESS, payload })
export const isAuthenticatedFailure = () => ({ type: ACTION.IS_AUTHENTICATED_FAILURE})

export const isAuthenticated = () => 
  (dispatch: Function) => {
    const token = handleToken.get()
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

/** LOAD USER DATA **/
export const loadUserDataRequest = () => ({ type: ACTION.LOAD_USER_DATA_REQUEST })
export const loadUserDataSuccess = (payload: Object) => ({ type: ACTION.LOAD_USER_DATA_SUCCESS, payload })
export const loadUserDataFailure = () => ({ type: ACTION.LOAD_USER_DATA_FAILURE })

export const loadUserData = (id: string) =>
  async (dispatch: Function) => {
    dispatch(loadUserDataRequest())

    try {
      setPromise.method = 'GET'
      setPromise.body = null
      setPromise.urls = `${URL}/${id}`
      const data = await setPromise.response()
      return dispatch(loadUserDataSuccess(data))
    } catch (err) {
      return dispatch(loadUserDataFailure())
    }
  }

/** UPDATE USER DATA **/
export const updateUserDataRequest = () => ({ type: ACTION.UPDATE_USER_DATA_REQUEST })
export const updateUserDataSuccess = (payload: Object) => ({ type: ACTION.UPDATE_USER_DATA_SUCCESS, payload })
export const updateUserDataFailure = () => ({ type: ACTION.UPDATE_USER_DATA_FAILURE })

export const updateUserData = (obj: Object) =>
  async (dispatch: Function) => {
    dispatch(updateUserDataRequest())

    try {
      setPromise.method = 'PUT'
      setPromise.body = JSON.stringify(obj)
      setPromise.urls = `${URL}/${config.api.profileId}`
      setPromise.types = 'application/json'
      const data = await setPromise.response(true)
      return dispatch(updateUserDataSuccess(data))
    } catch (err) {
      return dispatch(updateUserDataFailure())
    }
  }