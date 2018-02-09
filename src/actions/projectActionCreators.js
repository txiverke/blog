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