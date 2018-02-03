// @flow

import React from 'react'
import { connect } from 'react-redux'

import Search from '../components/Search'
import { checkPostsTags } from '../actions/postActionCreators'

class SearchContainer extends React.PureComponent {
  
  props: {
    tagsToRender: Array<string>,
    dispatch: Function,
    tags: Tag
  }

  handleTagClick = this.handleTagClick.bind(this)
  handleResetClick = this.handleResetClick.bind(this)

  componentDidMount() {
    const { tagsToRender, dispatch } = this.props
    dispatch(checkPostsTags(tagsToRender))
  }

  handleTagClick (val) {
    const { tags, dispatch } = this.props
    const exist = tags.data.includes(val)
    
    if (exist) {
      const index = tags.data.indexOf(val)
      tags.data.splice(index, 1)
    } else {
      tags.data.push(val)
    }

    dispatch(checkPostsTags(tags.data))
  }

  handleResetClick () {
    const { tagsToRender, dispatch } = this.props
    dispatch(checkPostsTags(tagsToRender))
  }

  render() {
    const { tagsToRender } = this.props

    return (
      <Search 
        tags={tagsToRender} 
        handleTagClick={this.handleTagClick}
        handleResetClick={this.handleResetClick} />
    ) 
  }
}

const mapStateToProps = state => ({ tags: state.tags })

export default connect(mapStateToProps)(SearchContainer)

