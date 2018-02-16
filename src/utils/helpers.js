// @flow

import config from '../config'

export const getSlug = (text: string) => {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
}

export const normalizeVal = (val: string) => Number(val) < 10 ? `0${val}` : val

export const getItem = (text: string, separator?: string = '/') => {
  return text.substr(text.lastIndexOf(separator) + 1)
}

export const truncateText = (text: string, leng?: number = 10) => {
    const lengTxt = text.split(' ')

    if (lengTxt.length > leng) {
      let result = ''
      let space = ' '

      lengTxt.forEach((item, i) => {
        if (i === leng) space = '...'
        if (i <= leng) {
          result += `${item}${space}`
        }
      })

      return result
    }

    return text
}

export const isEqual = (arg1: Array<string>, arg2: Array<string>) => {
  const a1 = arg1.sort()
  const a2 = arg2.sort()

  if (arg1.length === arg2.length) {
    a1.forEach((item, i) => {
      if (a1[i] !== a2[i]) return false 
    })

    return true
  }

  return false
}

export const handleToken = {
  TOKEN_KEY: config.api.token || '',
  get: function() {
    if (localStorage.getItem(this.TOKEN_KEY) 
      && localStorage.getItem(this.TOKEN_KEY) !== 'undefined') {
      // $FlowFixMe
      return JSON.parse(localStorage.getItem(this.TOKEN_KEY))
    }
  },
  set: function(val: string) {
    localStorage.setItem(this.TOKEN_KEY, val)
  },
  remove: function() {
    localStorage.removeItem(this.TOKEN_KEY)
  }
}

export const setPromise = {
  url: '',
  type: '',
  options: { 
    method: null,
    body: null,
    mode: 'cors'
  },
  // $FlowFixMe
  set method (val): string { this.options.method = val },
  // $FlowFixMe
  set body (val): Object { this.options.body = val },
  // $FlowFixMe
  set urls (val): string { this.url = val },
  // $FlowFixMe
  set types (val): string { this.type = val },

  async response() {
    const headers = new Headers({ 'access_token': JSON.parse(localStorage.getItem(config.api.token)) })

    if (this.type) headers.append('Content-Type', this.type)

    const options = Object.assign({}, this.options, { headers })
    const promise = await fetch(`${config.api.url}/${this.url}`, options)
    const response = await promise.json()

    return response
  }
}

