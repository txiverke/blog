// @flow

import config from '../config'

export const getSlug = (text: string) => {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
}

export const normalizeVal = (val: string) => Number(val) < 10 ? `0${val}` : val

export const handleToken = {
  token: '',
  TOKEN_NAME: config.api.token || '',
  // $FlowFixMe
  get tokens() { return this.token },
  // $FlowFixMe
  set tokens (val: string) {
    if (localStorage.getItem(this.TOKEN_NAME) && localStorage.getItem(this.TOKEN_NAME) !== 'undefined') {
       this.token = JSON.parse(localStorage.getItem(this.TOKEN))
    }
  },
  remove: function() {
    localStorage.removeItem(this.TOKEN)
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
  async response(id?: string) {
    console.log(`${config.api.url}/${this.url}`)
    const promise = await fetch(`${config.api.url}/${this.url}`, this.options)
    const response = await promise.json()
    return response
  }
}
