// @flow

import config from '../config'

export const getSlug = (text: string) => {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
}

export const normalizeVal = (val: string) => Number(val) < 10 ? `0${val}` : val

export const handleToken = {
  token: '',
  TOKEN_KEY: config.api.token || '',
  // $FlowFixMe
  get tokens() { 
    if (localStorage.getItem(this.TOKEN_KEY) && localStorage.getItem(this.TOKEN_KEY) !== 'undefined') {
      this.token = JSON.parse(localStorage.getItem(this.TOKEN_KEY))
    }
    return this.token
  },
  // $FlowFixMe
  set tokens (val: string) {
    this.token = localStorage.setItem(this.TOKEN_KEY, val)
  },
  remove: function() {
    this.token = localStorage.removeItem(this.TOKEN_KEY)
  }
}

export const setPromise = {
  url: '',
  options: { 
    method: null,
    
    headers: new Headers({
      'Content-Type': 'application/json',
      // $FlowFixMe
      'access_token':  handleToken.tokens
    }),
    body: null,
    mode: 'cors',
    cache: 'default',
  },
  // $FlowFixMe
  set method (val): string { this.options.method = val },
  // $FlowFixMe
  set body (val): Object { this.options.body = JSON.stringify(val) || null },
  // $FlowFixMe
  set urls (val): string { this.url = val },
  async response() {
    const promise = await fetch(`${config.api.url}/${this.url}`, this.options)
    const response = await promise.json()
    return response
  }
}
