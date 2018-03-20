// @flow

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as action from '../userActionCreators'
import * as type from '../actionsType'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('userActionCreators', () => {
  describe('login user', () => {
    it('should return LOGIN_USER_REQUEST action', () => {
      expect(action.loginUserRequest()).toMatchSnapshot()
    })

    it('should return LOGIN_USER_SUCCESS action', () => {
      expect(action.loginUserSuccess({})).toMatchSnapshot()
    })

    it('should return LOGIN_USER_FAILURE action', () => {
      expect(action.loginUserFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})
      const expectedActions = [
        'LOG_IN_USER_REQUEST',
        'LOG_IN_USER_FAILURE'
      ]

      return store.dispatch(action.loginUser({}))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toEqual(expectedActions)
       })
    })
  })

  describe('authenticate user', () => {
    it('should return IS_AUTHENTICATE_REQUEST action', () => {
      expect(action.isAuthenticatedRequest()).toMatchSnapshot()
    })

    it('should return IS_AUTHENTICATE_SUCCESS action', () => {
      expect(action.isAuthenticatedSuccess('')).toMatchSnapshot()
    })

    it('should return IS_AUTHENTICATE_FAILURE action', () => {
      expect(action.isAuthenticatedFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})
      const expectedActions = [
        'IS_AUTHENTICATE_REQUEST',
        'IS_AUTHENTICATE_FAILURE'
      ]

      store.dispatch(action.isAuthenticated())
      const actualActions = store.getActions().map(action => action.type)
      expect(actualActions).toEqual(expectedActions)
    })
  })

  describe('logout user', () => {
    it('should return LOG_OUT_USER_REQUEST action', () => {
      expect(action.logoutUserRequest()).toMatchSnapshot()
    })

    it('should return LOG_OUT_USER_SUCCESS action', () => {
      expect(action.logoutUserSuccess('')).toMatchSnapshot()
    })

    it('should return LOG_OUT_USER_FAILURE action', () => {
      expect(action.logoutUserFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})
      const expectedActions = [
        'LOG_OUT_USER_REQUEST',
        'LOG_OUT_USER_FAILURE'
      ]

      store.dispatch(action.logoutUser())
      const actualActions = store.getActions().map(action => action.type)
      expect(actualActions).toEqual(expectedActions)
    })
  })

  describe('load user data', () => {
    it('should return LOAD_USER_DATA_REQUEST action', () => {
      expect(action.loadUserDataRequest()).toMatchSnapshot()
    })

    it('should return LOAD_USER_DATA_SUCCESS action', () => {
      expect(action.loadUserDataSuccess({})).toMatchSnapshot()
    })

    it('should return LOAD_USER_DATA_FAILURE action', () => {
      expect(action.loadUserDataFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})
      const expectedActions = [
        'LOAD_USER_DATA_REQUEST',
        'LOAD_USER_DATA_FAILURE'
      ]

      return store.dispatch(action.loadUserData(''))
      .then(() => {
        const actualActions = store.getActions().map(action => action.type)
        expect(actualActions).toEqual(expectedActions)
     })
    })
  })

  describe('update user data', () => {
    it('should return UPDATE_USER_DATA_REQUEST action', () => {
      expect(action.updateUserDataRequest()).toMatchSnapshot()
    })

    it('should return UPDATE_USER_DATA_SUCCESS action', () => {
      expect(action.updateUserDataSuccess({})).toMatchSnapshot()
    })

    it('should return UPDATE_USER_DATA_FAILURE action', () => {
      expect(action.updateUserDataFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})
      const expectedActions = [
        'UPDATE_USER_DATA_REQUEST',
        'UPDATE_USER_DATA_FAILURE'
      ]

      return store.dispatch(action.updateUserData({}))
      .then(() => {
        const actualActions = store.getActions().map(action => action.type)
        expect(actualActions).toEqual(expectedActions)
     })
    })
  })
})