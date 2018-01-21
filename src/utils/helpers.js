// @flow

import config from '../config'

export const getSlug = (text: string) => {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
}

export const normalizeVal = (val: string) => Number(val) < 10 ? `0${val}` : val

export const handleToken = {
  TOKEN: config.api.token,
  get: function() {
    return JSON.parse(localStorage.getItem(this.TOKEN)) || ''
  },
  set: function(val: string) {
    localStorage.setItem(this.TOKEN, val)
  },
  remove: function() {
    localStorage.removeItem(this.TOKEN)
  }
}
