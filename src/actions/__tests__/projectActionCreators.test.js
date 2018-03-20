import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as action from '../projectActionCreators'
import * as type from '../actionsType'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('projectActionCreators', () => {
  describe('load project actions', () => {
    it('should return LOAD_PROJECT_DATA_REQUEST action', () => {
      expect(action.loadProjectDataRequest()).toMatchSnapshot()
    })

    it('should return LOAD_PROJECT_DATA_SUCCESS action', () => {
      expect(action.loadProjectDataSuccess(['test'])).toMatchSnapshot()
    })

    it('should return LOAD_PROJECT_DATA_FAILURE action', () => {
      expect(action.loadProjectDataFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})
      const expectedActions = [
        'LOAD_PROJECT_DATA_REQUEST',
        'LOAD_PROJECT_DATA_FAILURE'
      ]

      return store.dispatch(action.loadProjectData())
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toEqual(expectedActions)
       })
    })
  })

  describe('load project item actions', () => {
    it('should return LOAD_PROJECT_ITEM_REQUEST action', () => {
      expect(action.loadProjectItemRequest()).toMatchSnapshot()
    })

    it('should return LOAD_PROJECT_ITEM_SUCCESS action', () => {
      expect(action.loadProjectItemSuccess({test: true})).toMatchSnapshot()
    })

    it('should return LOAD_PROJECT_ITEM_FAILURE action', () => {
      expect(action.loadProjectItemFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})
      const expectedActions = [
        'LOAD_PROJECT_ITEM_REQUEST',
        'LOAD_PROJECT_ITEM_FAILURE'
      ]

      return store.dispatch(action.loadProjectItem('test'))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toEqual(expectedActions)
       })
    })
  })

  describe('create project actions', () => {
    it('should return CREATE_PROJECT_DATA_REQUEST action', () => {
      expect(action.createProjectDataRequest()).toMatchSnapshot()
    })

    it('should return CREATE_PROJECT_DATA_SUCCESS action', () => {
      expect(action.createProjectDataSuccess(['test'])).toMatchSnapshot()
    })

    it('should return CREATE_PROJECT_DATA_FAILURE action', () => {
      expect(action.createProjectDataFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})
      const expectedActions = [
        'CREATE_PROJECT_DATA_REQUEST',
        'CREATE_PROJECT_DATA_FAILURE'
      ]

      return store.dispatch(action.createProjectData({test: true}))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toEqual(expectedActions)
       })
    })
  })

  describe('update project actions', () => {
    it('should return UPDATE_PROJECT_DATA_REQUEST action', () => {
      expect(action.updateProjectDataRequest()).toMatchSnapshot()
    })

    it('should return UPDATE_PROJECT_DATA_SUCCESS action', () => {
      expect(action.updateProjectDataSuccess(['test'])).toMatchSnapshot()
    })

    it('should return UPDATE_PROJECT_DATA_FAILURE action', () => {
      expect(action.updateProjectDataFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})
      const expectedActions = [
        'UPDATE_PROJECT_DATA_REQUEST',
        'UPDATE_PROJECT_DATA_FAILURE'
      ]

      return store.dispatch(action.updateProjectData({test: true}, 'id'))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toEqual(expectedActions)
       })
    })
  })

  describe('remove project actions', () => {
    it('should return REMOVE_PROJECT_DATA_REQUEST action', () => {
      expect(action.removeProjectDataRequest()).toMatchSnapshot()
    })

    it('should return REMOVE_PROJECT_DATA_SUCCESS action', () => {
      expect(action.removeProjectDataSuccess('id')).toMatchSnapshot()
    })

    it('should return REMOVE_PROJECT_DATA_FAILURE action', () => {
      expect(action.removeProjectDataFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})
      const expectedActions = [
        'REMOVE_PROJECT_DATA_REQUEST',
        'REMOVE_PROJECT_DATA_FAILURE'
      ]

      return store.dispatch(action.removeProjectData('id'))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toEqual(expectedActions)
       })
    })
  })
})