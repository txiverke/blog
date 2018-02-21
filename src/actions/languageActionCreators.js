// @flow

import * as ACTION from './actionsType'

export const updateAppLanguage = (lang: string) => { 
  localStorage.setItem('xavierVilaTechLang', lang)
  return { type: ACTION.UPDATE_APP_LANGUAGE, payload: lang }
}
