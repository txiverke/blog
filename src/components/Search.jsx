// @flow

import React from 'react'

import Tag from './Tag'
import withWindow from './withWindow'

class Search extends React.PureComponent {
  state = {
    reset: false
  }

  props: {
    tags: Array<string>,
    handleTagClick: Function,
    handleResetClick: Function,
    scroll: boolean,
  }

  handleTagClick = (val: string) => {
    this.props.handleTagClick(val)
    this.setState({ reset: false })
  }

  handleResetClick = () => {
    this.props.handleResetClick()
    this.setState({ reset: true })
  }

  render() {
    const { scroll, tags } = this.props
    const opacityClass = scroll ? '-opaque' : ''
    const { reset } = this.state

    return (
      <div className="app-search">
        <button className={`app-search-bg${opacityClass}`} />
        <div className="app-search-content">
          <button
            onClick={this.handleResetClick}
            className="app-search-loupe txt icon-spinner11" 
          />
          {tags.map(item => {
            return (
              <Tag 
                handleClick={this.handleTagClick}
                key={item} 
                label={String(item)}
                reset={reset} 
              /> 
            )
          })} 
        </div>
      </div>
    )
  }
}

const SearchWithWindowScroll = withWindow(Search)

export const Unwrapped = Search
export default SearchWithWindowScroll
