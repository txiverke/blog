// @flow
import 'isomorphic-fetch'

import * as ACTION from './actions'
import config from './config'

const token = localStorage.getItem('token')
const headers = new Headers({
  'Content-Type': 'application/json',
  'access_token': JSON.parse(token) || '',
})

/** LOAD USER DATA **/
export const loadUserDataRequest = () => ({ type: ACTION.LOAD_USER_DATA_REQUEST })

export const loadUserDataSuccess = (payload: Array<Object>) => ({ 
  type: ACTION.LOAD_USER_DATA_SUCCESS, payload 
})

export const loadUserDataFailure = () => ({ type: ACTION.LOAD_USER_DATA_FAILURE })

export const loadUserData = () =>
  async (dispatch: Function) => {
    const options = { 
      method: 'GET',
      headers,
      mode: 'cors',
      cache: 'default',
    }

    dispatch(loadUserDataRequest())

    try {
      const promise = await fetch(`${config.api.url}/users`, options)
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
      return dispatch(loginUserSuccess(data.token))
    } catch (err) {
      dispatch(loginUserFailure())
    }
  }