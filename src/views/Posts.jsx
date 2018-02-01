// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import PostList from '../components/PostList'
import Loader from '../components/Loader'
import ShowMsg from '../components/ShowMsg'
import ButtonCorner from '../components/ButtonCorner'
import Search from '../containers/Search'
import { loadPostData } from '../actions/postActionCreators'
import { isEqual } from '../utils/helpers'

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
    const { tags } = nextProps

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
    const data = [...this.props.posts.data]
    const postsTagged = []
    const added = []

    tags.forEach(tag => {
      data.filter((item, i) => {
        if (item.tags.includes(tag) && !added.includes(item._id)) {
          postsTagged.push(item)
          added.push(item._id)
        }
        return false
      })
    })

    const postsSorted = postsTagged.sort((a, b) => a.created < b.created ? 1 : -1)
      
    this.setState({ posts: [...postsSorted] })
  }

  render() {
    const { completed, data, message, error } = this.props.posts
    const { posts } = this.state

    if (completed) {
      const tags = this.getTags(data)

      return (
        <section className="">
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
          <PostList list={posts} />
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