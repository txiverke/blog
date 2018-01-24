// @flow

import * as ACTION from './actionsType'
import config from '../config'
import { handleToken } from '../utils/helpers'

/** LOAD APP STATISTICS */
export const loadStatsRequest = () => ({ type: ACTION.LOAD_STATS_REQUEST })
export const loadStatsSuccess = (payload: Object) => ({ type: ACTION.LOAD_STATS_SUCCESS, payload })
export const loadStatsFailure = () => ({ type: ACTION.LOAD_STATS_FAILURE })

export const loadStats = () => 
  async (dispatch: Function) => {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = { 
      method: 'GET',
      headers,
      mode: 'cors',
      cache: 'default',
    }

    dispatch(loadStatsRequest())

    try {
      const promise = await fetch(`${config.api.url}/statistic`, options)
      const data = await promise.json()
      return dispatch(loadStatsSuccess(data))
    } catch (err) {
      dispatch(loadStatsFailure())
    }
  } 




