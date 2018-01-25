// @flow

import * as ACTION from './actionsType'
import config from '../config'
import { handleToken, setPromise } from '../utils/helpers'

const URL = 'posts'

/** LOAD POST DATA */
export const loadPostDataRequest = () => ({ type: ACTION.LOAD_POST_DATA_REQUEST })
export const loadPostDataSuccess = (payload: Array<Object>) => ({
  type: ACTION.LOAD_POST_DATA_SUCCESS, payload
})
export const loadPostDataFailure = () => ({ type: ACTION.LOAD_POST_DATA_FAILURE })

export const loadPostData = () => 
  async (dispatch: Function) => {
    dispatch(loadPostDataRequest())

    try {
      // $FlowFixMe
      setPromise.method = 'GET'
      // $FlowFixMe
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
      // $FlowFixMe
      setPromise.method = 'POST'
      // $FlowFixMe
      setPromise.body = obj
      // $FlowFixMe
      setPromise.urls = URL
      const data = await setPromise.response()
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
  dispatch(removePostDataRequest())

  try {
    // $FlowFixMe
    setPromise.method = 'DELETE'
    // $FlowFixMe
    setPromise.urls = `${URL}/${id}`
    const data = await setPromise.response()
    return dispatch(removePostDataSuccess(data))
  } catch (err) {
    return dispatch(removePostDataFailure())
  }
}