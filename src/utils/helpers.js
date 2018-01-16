// @flow

export const getSlug = (text: string) => {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
}