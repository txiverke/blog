// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import PostList from '../components/PostList'
import Loader from '../components/Loader'
import ShowMsg from '../components/ShowMsg'
import ButtonCorner from '../components/ButtonCorner'
import Search from '../containers/Search'
import { loadPostData, checkPostsTags } from '../actions/postActionCreators'
import config from '../config'
import { getSlug, isEqual } from '../utils/helpers'

class Posts extends React.Component {
  state = {
    tags: [],
    posts: [],
  }

  props: {
    dispatch: Function,
    posts: Data,
    tags: Tag,
  }

  componentDidMount() {
    const { dispatch, posts } = this.props

    if (posts.data.length === 0) {
      dispatch(loadPostData())
    }
  }

  componentWillReceiveProps(nextProps) {
    const { tags, dispatch, posts  } = nextProps
    if (!isEqual(tags.data, this.state.tags)) {
      this.setState({ tags: [...tags.data] })
      this.renderProperPosts(tags.data)
    }
  }

  getTags(data) {
    const listOfArr = data.map(item =>  item.tags.split(','))
    return Array.from(new Set([].concat(...listOfArr).map(item => item.trim())))
  }
  
  renderProperPosts(tags) {
    const { data } = this.props.posts
    const postsTagged = []
    
    tags.filter(tag => {
      return data.filter(item => {
        if (item.tags.includes(tag)) {
          postsTagged.push(item)
        }
      })
    })
      
    this.setState({ posts: Array.from(new Set(postsTagged)) })
  }

  render() {
    const { completed, data, message, error } = this.props.posts
    const { posts } = this.state

    if (completed) {
      const tags = this.getTags(data)

      return (
        <section className="app-article-wrapper">
          <Helmet 
            title="Posts" 
            meta={[
              { name:"description", content: "Posts about Frontend development" },
              { property: "og:title", content: "Posts about Frontend development" },
            ]}
          />
          {error && <ShowMsg message={message} error={error} next={completed} />}
          <ButtonCorner label="Back" />
          <Search tagsToRender={tags} />
          <PostList data={posts} />
        </section>
      )
    }

    return (
      <div className="app-view app-view-centered">
        <Loader msg={message} />
      </div>
    )
  }
} 

const mapStateToProps = state => ({ 
  posts: state.posts,
  tags: state.tags 
})
  
export default connect(mapStateToProps)(Posts)