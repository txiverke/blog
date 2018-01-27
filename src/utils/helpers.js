// @flow

import config from '../config'

export const getSlug = (text: string) => {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
}

export const normalizeVal = (val: string) => Number(val) < 10 ? `0${val}` : val

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
  options: { 
    method: null,
    headers: new Headers({
      'access_token': JSON.parse(localStorage.getItem(config.api.token))
    }),
    body: null,
    mode: 'cors',
  },
  // $FlowFixMe
  set method (val): string { this.options.method = val },
  // $FlowFixMe
  set body (val): Object { this.options.body = val },
  // $FlowFixMe
  set urls (val): string { this.url = val },

  async response() {
    const promise = await fetch(`${config.api.url}/${this.url}`, this.options)
    const response = await promise.json()
    return response
  }
}
