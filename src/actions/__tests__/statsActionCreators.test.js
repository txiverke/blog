import * as action from '../statsActionCreators'
import * as type from '../actionsType'
import config from '../../config'

describe('statsActionCreators', () => {
  it('should return LOAD_STATS_REQUEST action', () => {
    expect(action.loadStatsRequest()).toEqual({ type: type.LOAD_STATS_REQUEST })
  })

  it('should return LOAD_STATS_SUCCESS action', () => {
    const result = { testing: true }
    expect(action.loadStatsSuccess(result)).toEqual({
      type: type.LOAD_STATS_SUCCESS,
      payload: result
    })
  })

  it('should return LOAD_STATS_FAILURE action', () => {
    expect(action.loadStatsFailure()).toEqual({ type: type.LOAD_STATS_FAILURE })
  })
})