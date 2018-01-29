// @flow

import * as ACTION from './actionsType'
import { setPromise } from '../utils/helpers'

const URL = 'posts'

/** LOAD POSTS */
export const loadPostDataRequest = () => ({ type: ACTION.LOAD_POST_DATA_REQUEST })
export const loadPostDataSuccess = (payload: Array<Object>) => ({ type: ACTION.LOAD_POST_DATA_SUCCESS, payload })
export const loadPostDataFailure = () => ({ type: ACTION.LOAD_POST_DATA_FAILURE })

export const loadPostData = () => 
  async (dispatch: Function) => {
    dispatch(loadPostDataRequest())

    try {
      setPromise.method = 'GET'
      setPromise.body = null
      setPromise.urls = URL
      const data = await setPromise.response()
      return dispatch(loadPostDataSuccess(data))
    } catch (err) {
      return dispatch(loadPostDataFailure())
    }

}

/** LOAD POST ITEM */
export const loadPostItemRequest = () => ({ type: ACTION.LOAD_POST_ITEM_REQUEST })
export const loadPostItemSuccess = (payload: Object) => ({ type: ACTION.LOAD_POST_ITEM_SUCCESS, payload })
export const loadPostItemFailure = () => ({ type: ACTION.LOAD_POST_ITEM_FAILURE })
export const updatePostItemSucces = () => ({ type: ACTION.UPDATE_POST_ITEM_SUCCESS })

export const loadPostItem = (id: string) => 
  async (dispatch: Function) => {
    dispatch(loadPostItemRequest())

    try {
      setPromise.method = 'GET'
      setPromise.body = null
      setPromise.urls = `${URL}/${id}`
      const data = await setPromise.response()
      return dispatch(loadPostItemSuccess(data))
    } catch (err) {
      return dispatch(loadPostItemFailure())
    }

}

/** CREATE POST */
export const createPostDataRequest = () => ({ type: ACTION.CREATE_POST_DATA_REQUEST })
export const createPostDataSuccess = (payload: Array<Object>) => ({ type: ACTION.CREATE_POST_DATA_SUCCESS, payload })
export const createPostDataFailure = () => ({ type: ACTION.CREATE_POST_DATA_FAILURE})

export const createPostData = (obj: Object) => 
  async (dispatch: Function) => {
    console.log('obj->',obj)

    let body = new FormData()
    body.append('file', obj.file, obj.file.name);
    body.append('title', obj.title)
    body.append('content', obj.content)
    body.append('tags', obj.tags)
    body.append('link', obj.link)
    body.append('creator', JSON.stringify(obj.creator))
    
    dispatch(createPostDataRequest())
    
    try {
      setPromise.method = 'POST'
      setPromise.body = body
      setPromise.urls = URL
      const data = await setPromise.response()
      return dispatch(createPostDataSuccess(data))
    } catch (err) {
      return dispatch(createPostDataFailure())
    }
}

/** UPDATE POST */
export const updatePostDataRequest = () => ({ type: ACTION.UPDATE_POST_DATA_REQUEST })
export const updatePostDataSuccess = (payload: Array<Object>) => ({ type: ACTION.UPDATE_POST_DATA_SUCCESS, payload })
export const updatePostDataFailure = () => ({ type: ACTION.UPDATE_POST_DATA_FAILURE})

export const updatePostData = (obj: Object, id: string) => 
  async (dispatch: Function) => {
    dispatch(updatePostDataRequest())

    try {
      let body = new FormData()
      if (obj.file) {
        body.append('file', obj.file, obj.file.name)
      }
      body.append('title', obj.title)
      body.append('content', obj.content)
      body.append('tags', obj.tags)
      body.append('link', obj.link)
      body.append('creator', JSON.stringify(obj.creator))

      setPromise.method = 'PUT'
      setPromise.body = body
      setPromise.urls = `${URL}/${id}`
      const data = await setPromise.response()
      dispatch(updatePostDataSuccess(data))
      return dispatch(updatePostItemSucces())
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
    setPromise.body = null
    setPromise.urls = `${URL}/${id}`
    const data = await setPromise.response()
    return dispatch(removePostDataSuccess(data))
  } catch (err) {
    return dispatch(removePostDataFailure())
  }
}