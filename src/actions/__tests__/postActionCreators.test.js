// @flow

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as action from '../postActionCreators'
import * as type from '../actionsType'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('postActionCreators', () => {
  describe('load post data actions', () => {
    it('should return LOAD_POST_DATA_REQUEST action', () => {
      expect(action.loadPostDataRequest()).toMatchSnapshot()
    })

    it('should return LOAD_POST_DATA_SUCCESS action', () => {
      const payload = [{ test: true }]
      expect(action.loadPostDataSuccess(payload)).toMatchSnapshot()
    })

    it('should return LOAD_POST_DATA_FAILURE', () => {
      expect(action.loadPostDataFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})

      return store.dispatch(action.loadPostData())
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toMatchSnapshot()
       })
    })
  })

  describe('load post item actions', () => {
    it('should return LOAD_POST_ITEM_REQUEST action', () => {
      expect(action.loadPostItemRequest()).toMatchSnapshot()
    })

    it('should return LOAD_POST_ITEM_SUCCESS action', () => {
      const payload = { test: true }
      expect(action.loadPostItemSuccess(payload)).toMatchSnapshot()
    })

    it('should return LOAD_POST_ITEM_FAILURE', () => {
      expect(action.loadPostItemFailure()).toMatchSnapshot()
    })

    it('should return UPDATE_POST_ITEM_SUCCESS action', () => {
      expect(action.updatePostItemSucces()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})

      return store.dispatch(action.loadPostItem(''))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toMatchSnapshot()
       })
    })
  })

  describe('create post data actions', () => {
    it('should return CREATE_POST_DATA_REQUEST action', () => {
      expect(action.createPostDataRequest()).toMatchSnapshot()
    })

    it('should return CREATE_POST_DATA_SUCCESS action', () => {
      const payload = [{ test: true }]
      expect(action.createPostDataSuccess(payload)).toMatchSnapshot()
    })

    it('should return CREATE_POST_DATA_FAILURE', () => {
      expect(action.createPostDataFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})

      return store.dispatch(action.loadPostData({}))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toMatchSnapshot()
       })
    })
  })

  describe('update post data actions', () => {
    it('should return UPDATE_POST_DATA_REQUEST action', () => {
      expect(action.updatePostDataRequest()).toMatchSnapshot()
    })

    it('should return UPDATE_POST_DATA_SUCCESS action', () => {
      const payload = [{ test: true }]
      expect(action.updatePostDataSuccess(payload)).toMatchSnapshot()
    })

    it('should return UPDATE_POST_DATA_FAILURE', () => {
      expect(action.updatePostDataFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})

      return store.dispatch(action.updatePostData({}, ''))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toMatchSnapshot()
       })
    })
  })

  describe('remove post data actions', () => {
    it('should return REMOVE_POST_DATA_REQUEST action', () => {
      expect(action.removePostDataRequest()).toMatchSnapshot()
    })

    it('should return REMOVE_POST_DATA_SUCCESS action', () => {
      const payload = {
        completed: true,
        data: [],
        message: 'fake message',
        error: false
      }
      expect(action.removePostDataSuccess(payload)).toMatchSnapshot()
    })

    it('should return REMOVE_POST_DATA_FAILURE', () => {
      expect(action.removePostDataFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on request', () => {
      const store = mockStore({})

      return store.dispatch(action.removePostData(''))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type)
          expect(actualActions).toMatchSnapshot()
       })
    })
  })

  describe('check post tags actions', () => {
    it('should return CHECK_POSTS_TAGS_REQUEST action', () => {
      expect(action.checkPostsTagsRequest()).toMatchSnapshot()
    })

    it('should return CHECK_POSTS_TAGS_SUCCESS action', () => {
      const payload = ['test']
      expect(action.checkPostsTagsSuccess(payload)).toMatchSnapshot()
    })

    it('should return CHECK_POSTS_TAGS_FAILURE', () => {
      expect(action.checkPostsTagsFailure()).toMatchSnapshot()
    })

    it('expected actions should be dispatched on successful request', () => {
      const store = mockStore({})
      const expectedActions = [
        'CHECK_POSTS_TAGS_REQUEST',
        'CHECK_POSTS_TAGS_SUCCESS'
      ]
      store.dispatch(action.checkPostsTags(['tests']))
        
      const actualActions = store.getActions().map(action => action.type)
      expect(actualActions).toEqual(expectedActions)
    })
  })
  
})