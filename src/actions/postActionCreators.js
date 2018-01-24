// @flow

import * as ACTION from './actionsType'
import config from '../config'
import { handleToken } from '../utils/helpers'

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

/** CREATE POST */
export const createPostDataRequest = () => ({ type: ACTION.CREATE_POST_DATA_REQUEST })
export const createPostDataSuccess = (payload: Array<Object>) => ({ type: ACTION.CREATE_POST_DATA_SUCCESS, payload })
export const createPostDataFailure = () => ({ type: ACTION.CREATE_POST_DATA_FAILURE})

export const createPostData = (obj: Object) => 
  async (dispatch: Function) => {
    console.log(obj)
    const token: ?string = handleToken.get()
    const headers = new Headers({
      'Content-Type': 'application/json',
      'access_token': token || ''
    })
    const options = { 
      method: 'POST',
      body: JSON.stringify(obj),
      headers,
      mode: 'cors',
      cache: 'default',
    }

    dispatch(createPostDataRequest())

    try {
      const promise = await fetch(`${config.api.url}/posts/`, options)
      const data = await promise.json()
      return dispatch(createPostDataSuccess(data))
    } catch (err) {
      return dispatch(createPostDataFailure())
    }
}

/** REMOVE POST */
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