// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import { getItem } from '../utils/helpers'
import { loadPostItem, loadPostData } from '../actions/postActionCreators'

class PostView extends React.Component {
  state = {
    id: ''
  }

  props: {
    location: Object,
    match: Object,
    dispatch: Function,
    post: Item,
    posts: Data,
  } 
  
  componentDidMount() {
    const { dispatch, match, post, posts } = this.props
    const id = getItem(match.params.slug, '-')
    this.setState({ id })

    if (Object.keys(post.data).length === 0 || post.data._id !== id ) {
      dispatch(loadPostItem(id))
    }
    
    if (posts.data.length === 0) {
      dispatch(loadPostData())
    }
  }

  render () {
    const { data } = this.props.post
    return (
      <section className="app-view-content">
          <Helmet 
            title="Posts" 
            meta={[
              { name:"description", content: "Posts about Frontend development" },
              { property: "og:title", content: "Posts about Frontend development" },
            ]}
          />
          <div>{this.state.id}<br />{JSON.stringify(data, null, 4)}</div>
          <a 
            className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?text=Hello%20world?url=${this.props.location.pathname}>`}>
          Tweet</a>
      </section>
    )
  }
}

const mapStateToProps = state => ({ 
  post: state.post,
  posts: state.posts 
})

export default connect(mapStateToProps)(PostView)