import request from 'supertest-as-promised'
import * as action from '../statsActionCreators'
import * as type from '../actionsType'

describe('statsActionCreators', () => {
  it('should return LOAD_STATS_REQUEST action', () => {
    expect(action.loadStatsRequest()).toMatchSnapshot()
  })

  it('should return LOAD_STATS_SUCCESS action', () => {
    const result = { testing: true }
    expect(action.loadStatsSuccess(result)).toMatchSnapshot()
  })

  it('should return LOAD_STATS_FAILURE action', () => {
    expect(action.loadStatsFailure()).toMatchSnapshot()
  })

})