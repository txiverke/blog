// @flow

import * as ACTION from './actionsType'
import { setPromise } from '../utils/helpers'

const URL = 'projects'

/**
 * LOAD PROJECTS
 */

 export const loadProjectDataRequest = () => ({ type: ACTION.LOAD_PROJECT_DATA_REQUEST })
 export const loadProjectDataSuccess = (payload: Array<Object>) => ({ type: ACTION.LOAD_PROJECT_DATA_SUCCESS, payload })
 export const loadProjectDataFailure = () => ({ type: ACTION.LOAD_PROJECT_DATA_FAILURE })

 export const loadProjectData = () => async (dispatch: Function) => {
  dispatch(loadProjectDataRequest())

  try {
    setPromise.method = 'GET'
    setPromise.body = null
    setPromise.urls = URL
    const data = await setPromise.response()
    return dispatch(loadProjectDataSuccess(data))
  } catch (err) {
    dispatch(loadProjectDataFailure())
  }
 }

 /** LOAD PROJECT ITEM */
export const loadProjectItemRequest = () => ({ type: ACTION.LOAD_PROJECT_ITEM_REQUEST })
export const loadProjectItemSuccess = (payload: Object) => ({ type: ACTION.LOAD_PROJECT_ITEM_SUCCESS, payload })
export const loadProjectItemFailure = () => ({ type: ACTION.LOAD_PROJECT_ITEM_FAILURE })
export const updateProjectItemSucces = () => ({ type: ACTION.UPDATE_PROJECT_ITEM_SUCCESS })

export const loadProjectItem = (id: string) => 
  async (dispatch: Function) => {
    dispatch(loadProjectItemRequest())

    try {
      setPromise.method = 'GET'
      setPromise.body = null
      setPromise.urls = `${URL}/${id}`
      const data = await setPromise.response()
      return dispatch(loadProjectItemSuccess(data))
    } catch (err) {
      return dispatch(loadProjectItemFailure())
    }

}

 /**
  * CREATE A PROJECT
  */

  export const createProjectDataRequest = () => ({ type: ACTION.CREATE_PROJECT_DATA_REQUEST })
  export const createProjectDataSuccess = (payload: Array<Object>) => ({ type: ACTION.CREATE_PROJECT_DATA_SUCCESS, payload })
  export const createProjectDataFailure = () => ({ type: ACTION.CREATE_PROJECT_DATA_FAILURE })

  export const createProjectData = (obj: Object) => 
    async (dispatch: Function) => {
      dispatch(createProjectDataRequest())

      try {
        const body = new FormData()
        body.append('title', obj.title)
        body.append('file', obj.file, obj.file.name)
        body.append('subtitle', obj.subtitle)
        body.append('summary', obj.summary)
        body.append('content', obj.content)
        body.append('link', obj.link)

        setPromise.method = 'POST'
        setPromise.body = body
        setPromise.urls = URL

        const data = await setPromise.response()
        dispatch(createProjectDataSuccess(data))
      } catch (err) {
        dispatch(createProjectDataFailure())
      }
  }

  /**
   * UPDATE PROJECT
   */

  export const updateProjectDataRequest = () => ({ type: ACTION.UPDATE_PROJECT_DATA_REQUEST })
  export const updateProjectDataSuccess = (payload: Array<Object>) => ({ type: ACTION.UPDATE_PROJECT_DATA_SUCCESS, payload })
  export const updateProjectDataFailure = () => ({ type: ACTION.UPDATE_PROJECT_DATA_FAILURE })

  export const updateProjectData = (obj: Object, id: string) => 
    async (dispatch: Function) => {
      dispatch(updateProjectDataRequest())
      console.log('obj', obj)
      try {
        const body = new FormData()
        body.append('title', obj.title)
        if (obj.file) body.append('file', obj.file, obj.file.name)
        body.append('subtitle', obj.subtitle)
        body.append('summary', obj.summary)
        body.append('content', obj.content)
        body.append('link', obj.link)

        setPromise.method = 'PUT'
        setPromise.body = body
        setPromise.urls = `${URL}/${id}`

        const data = await setPromise.response()
        dispatch(updateProjectDataSuccess(data))
      } catch (err) {
        dispatch(updateProjectDataFailure())
      }
  }

  /**
   * REMOVE PROJECT
   */
  export const removeProjectDataRequest = () => ({ type: ACTION.REMOVE_PROJECT_DATA_REQUEST })
  export const removeProjectDataSuccess = (payload: Array<Object>) => ({ type: ACTION.REMOVE_PROJECT_DATA_SUCCESS, payload })
  export const removeProjectDataFailure = () => ({ type: ACTION.REMOVE_PROJECT_DATA_FAILURE })

  export const removeProjectData = (id: string) => 
    async (dispatch: Function) => {
      dispatch(removeProjectDataRequest())

      try {
        setPromise.method = 'DELETE'
        setPromise.body = null
        setPromise.urls = `${URL}/${id}`

        const data = await setPromise.response()
        dispatch(removeProjectDataSuccess(data))
      } catch (err) {
        dispatch(removeProjectDataFailure())
      }
  }