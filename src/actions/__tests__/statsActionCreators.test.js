// @flow

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as action from '../statsActionCreators'
import * as type from '../actionsType'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

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

  it('expected actions should be dispatched on request', () => {
    const store = mockStore({})
    const expectedActions = [
      'LOAD_STATS_REQUEST',
      'LOAD_STATS_FAILURE'
    ]

    return store.dispatch(action.loadStats())
      .then(() => {
        const actualActions = store.getActions().map(action => action.type)
        expect(actualActions).toEqual(expectedActions)
     })
  })

})