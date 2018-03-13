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
      // $FlowFixMe
      setPromise.method = 'GET'
      // $FlowFixMe
      setPromise.body = null
      // $FlowFixMe      
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
      // $FlowFixMe      
      setPromise.method = 'GET'
      // $FlowFixMe      
      setPromise.body = null
      // $FlowFixMe      
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
    dispatch(createPostDataRequest())
    
    try {
      const body = new FormData()
      body.append('file', obj.file, obj.file.name);
      body.append('title', obj.title)
      body.append('content', obj.content)
      body.append('tags', obj.tags)
      body.append('link', obj.link)

      // $FlowFixMe      
      setPromise.method = 'POST'
      // $FlowFixMe
      setPromise.body = body
      // $FlowFixMe
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
      if (obj.file) body.append('file', obj.file, obj.file.name)
      body.append('title', obj.title)
      body.append('content', obj.content)
      body.append('tags', obj.tags)
      body.append('link', obj.link)

      // $FlowFixMe
      setPromise.method = 'PUT'
      // $FlowFixMe
      setPromise.body = body
      // $FlowFixMe
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
export const removePostDataSuccess = (payload: Data) => ({ type: ACTION.REMOVE_POST_DATA_SUCCESS, payload })
export const removePostDataFailure = () => ({ type: ACTION.REMOVE_POST_DATA_FAILURE})

export const removePostData = (id: string) => 
  async (dispatch: Function) => {
  dispatch(removePostDataRequest())

  try {
    // $FlowFixMe
    setPromise.method = 'DELETE'
    // $FlowFixMe
    setPromise.body = null
    // $FlowFixMe
    setPromise.urls = `${URL}/${id}`
    const data = await setPromise.response()
    return dispatch(removePostDataSuccess(data))
  } catch (err) {
    return dispatch(removePostDataFailure())
  }
}

/** CHECK TAGS */

export const checkPostsTagsRequest = () => ({ type: ACTION.CHECK_POSTS_TAGS_REQUEST })
export const checkPostsTagsSuccess = (payload: Array<string>) => ({ type: ACTION.CHECK_POSTS_TAGS_SUCCESS, payload })
export const checkPostsTagsFailure = () => ({ type: ACTION.CHECK_POSTS_TAGS_FAILURE })

export const checkPostsTags = (arr: Array<string>) => 
  (dispatch: Function) => {
    dispatch(checkPostsTagsRequest())

    if (Array.isArray(arr)) {
      return dispatch(checkPostsTagsSuccess(arr))
    } 

    return dispatch(checkPostsTagsFailure())
  }