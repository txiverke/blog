import * as H from '../helpers'
import { setPromise } from '../__mocks__/setPromise'

describe('Helpers functions', () => {
  describe('getSlug', () => {
    it('should return a string with hyphens and lowerCase', () => {
      const txt = 'Just a random text'
      const result = H.getSlug(txt)
      expect(result).toEqual('just-a-random-text')
    })
  })

  describe('normalizeVale', () => {
    it ('should return a number with a previous zero', () => {
      const result = H.normalizeVal(4)
      expect(result).toEqual('04')
    })

    it('should return the same number when is higher to 10', () => {
      const result = H.normalizeVal(15)
      expect(result).toEqual('15')
    })
  })

  describe('getItem', () => {
    it('should return the last item based on the default separator', () => {
      const txt = 'just/a/fake/string'
      const result = H.getItem(txt)
      expect(result).toEqual('string')
    })

    it('should return the last item passing a separator as argument', () => {
      const txt = 'just-a-fake-string'
      const result = H.getItem(txt, '-')
      expect(result).toEqual('string')
    })
  })

  describe('getLanguage', () => {
    it('should return the default language', () => {
      const result = H.getLanguage()
      expect(result).toEqual('eng')
    })
  })

  describe('truncateText', () => {
    it('should truncate text', () => {
      const txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nec augue in porttitor. Praesent rhoncus nisi quis finibus bibendum. Morbi sit amet odio neque. Aenean imperdiet tristique iaculis. Suspendisse rutrum vehicula nisl id euismod. Nullam pulvinar facilisis dignissim.'
      const result = H.truncateText(txt)
      expect((result.split(' ').length)).toBe(10)
    })

    it('should trucate text with an specific lenght set by arg', () => {
      const txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nec augue in porttitor. Praesent rhoncus nisi quis finibus bibendum. Morbi sit amet odio neque. Aenean imperdiet tristique iaculis. Suspendisse rutrum vehicula nisl id euismod. Nullam pulvinar facilisis dignissim.'
      const result = H.truncateText(txt, 15)
      expect((result.split(' ').length)).toEqual(15)
    })

    it('should return the same text if the text lenght is shorter than 10 words', () => {
      const txt = 'Lorem ipsum dolor sit amet'
      const result = H.truncateText(txt)
      expect(result).toEqual(txt)
    })
  })

  describe('isEqual', () => {
    it('should return true if both arrays have the same items', () => {
      const arr1 = ['one', 'two', 'three']
      const arr2 = ['two', 'one', 'three']
      const result = H.isEqual(arr1, arr2)
      expect(result).toBeTruthy()
    })

    it('should return false if arrays are different', () => {
      const arr1 = ['one', 'two']
      const arr2 = ['two', 'one', 'three']
      const result = H.isEqual(arr1, arr2)
      expect(result).toBeFalsy()
    })
  })

  describe('handleToken', () => {
    it('should set and get an item in localStorage', () => {
      const txt = 'just a test'
      H.handleToken.set(txt)
      const result = H.handleToken.get()
      expect(result).toEqual(txt)      
    })

    it('should remove the item in localStorate', () => {
      const txt = 'just a test'
      H.handleToken.set(txt)
      let result = H.handleToken.get()
      expect(result).toEqual(txt)
      H.handleToken.remove()
      result = H.handleToken.get()
      expect(result).toBeUndefined()
    })
  })

  describe('setPromise', () => {
    it('should return user name when method is GET', async () => {
      setPromise.method = 'GET'
      setPromise.body = null
      setPromise.urls = 4
      const data = await setPromise.response()
      expect(data.name).toEqual('Mark')
    })

    it('should add a user when method is PUT', async () => {
      setPromise.method = 'PUT'
      setPromise.body = { name: 'test'}
      setPromise.urls = null
      const data = await setPromise.response()
      expect(Object.keys(data).length).toEqual(3)
    })
  })
})