import * as action from '../languageActionCreators'
import * as type from '../actionsType'

describe('languageActionCreators', () => {
  it('should return UPDATE_APP_LANGUAGE action', () => {
    const lang = 'eng'
    expect(action.updateAppLanguage(lang)).toMatchSnapshot()
  })
})