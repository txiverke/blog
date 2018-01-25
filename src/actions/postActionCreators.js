// @flow

import * as ACTION from './actionsType'
import config from '../config'
import { handleToken, setPromise } from '../utils/helpers'

const URL = 'posts'

/** LOAD POST */
export const loadPostDataRequest = () => ({ type: ACTION.LOAD_POST_DATA_REQUEST })
export const loadPostDataSuccess = (payload: Array<Object>) => ({ type: ACTION.LOAD_POST_DATA_SUCCESS, payload })
export const loadPostDataFailure = () => ({ type: ACTION.LOAD_POST_DATA_FAILURE })

export const loadPostData = () => 
  async (dispatch: Function) => {
    dispatch(loadPostDataRequest())

    try {
      setPromise.method = 'GET'
      setPromise.urls = URL
      const data = await setPromise.response()
      return dispatch(loadPostDataSuccess(data))
    } catch (err) {
      console.log(err)
      return dispatch(loadPostDataFailure())
    }

}

/** CREATE POST */
export const createPostDataRequest = () => ({ type: ACTION.CREATE_POST_DATA_REQUEST })
export const createPostDataSuccess = (payload: Array<Object>) => ({ type: ACTION.CREATE_POST_DATA_SUCCESS, payload })
export const createPostDataFailure = () => ({ type: ACTION.CREATE_POST_DATA_FAILURE})

export const createPostData = (obj: Object) => 
  async (dispatch: Function) => {
    dispatch(createPostDataRequest())

    try {
      setPromise.method = 'POST'
      setPromise.body = obj
      setPromise.urls = URL
      const data = await setPromise.response()
      return dispatch(createPostDataSuccess(data))
    } catch (err) {
      return dispatch(createPostDataFailure())
    }
}

/** CREATE POST */
export const updatePostDataRequest = () => ({ type: ACTION.UPDATE_POST_DATA_REQUEST })
export const updatePostDataSuccess = (payload: Array<Object>) => ({ type: ACTION.UPDATE_POST_DATA_SUCCESS, payload })
export const updatePostDataFailure = () => ({ type: ACTION.UPDATE_POST_DATA_FAILURE})

export const updatePostData = (obj: Object, id: string) => 
  async (dispatch: Function) => {
    dispatch(updatePostDataRequest())

    try {
      setPromise.method = 'PUT'
      setPromise.body = obj
      setPromise.urls = `${URL}/${id}`
      const data = await setPromise.response()
      return dispatch(updatePostDataSuccess(data))
    } catch (err) {
      return dispatch(updatePostDataFailure())
    }
}

/** REMOVE POST */
export const removePostDataRequest = () => ({ type: ACTION.REMOVE_POST_DATA_REQUEST })
export const removePostDataSuccess = (payload: Array<Object>) => ({ type: ACTION.REMOVE_POST_DATA_SUCCESS, payload })
export const removePostDataFailure = () => ({ type: ACTION.REMOVE_POST_DATA_FAILURE})

export const removePostData = (id: string) => 
  async (dispatch: Function) => {
  dispatch(removePostDataRequest())

  try {
    setPromise.method = 'DELETE'
    setPromise.urls = `${URL}/${id}`
    const data = await setPromise.response()
    return dispatch(removePostDataSuccess(data))
  } catch (err) {
    return dispatch(removePostDataFailure())
  }
}