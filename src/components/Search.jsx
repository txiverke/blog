// @flow

import React from 'react'

import Tag from './Tag'
import withWindowScroll from './withWindowScroll'

type Props = {
  item: Array<string>,
  scroll: boolean,
  handleClick: Function
}

const Search = ({ item, handleClick, scroll }: Props) => {
  
  const opacityClass = scroll ? '-opaque' : ''

  return (
    <div className="app-search">
      <button 
        className={`app-search-bg${opacityClass}`} />
      <div className="app-search-content">
        <span className="app-search-loupe txt icon-search" />
        {item.map(item => {
          return (
            <Tag 
              handleClick={handleClick}
              key={item} 
              label={String(item)} 
            /> 
          )
        })} 
      </div>
    </div>
  )
}

const SearchWithWindowScroll = withWindowScroll(Search)

export default SearchWithWindowScroll
