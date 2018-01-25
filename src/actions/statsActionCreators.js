// @flow

import * as ACTION from './actionsType'
import { setPromise } from '../utils/helpers'

const URL = 'statistic'

/** LOAD APP STATISTICS */
export const loadStatsRequest = () => ({ type: ACTION.LOAD_STATS_REQUEST })
export const loadStatsSuccess = (payload: Object) => ({ type: ACTION.LOAD_STATS_SUCCESS, payload })
export const loadStatsFailure = () => ({ type: ACTION.LOAD_STATS_FAILURE })

export const loadStats = () => 
  async (dispatch: Function) => {
    dispatch(loadStatsRequest())

    try {
      setPromise.method = 'GET'
      setPromise.urls = URL
      const data = await setPromise.response()
      return dispatch(loadStatsSuccess(data))
    } catch (err) {
      dispatch(loadStatsFailure())
    }
  } 




