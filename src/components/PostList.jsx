// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loadPostData } from '../actions/postActionCreators'
import Loader from './Loader'
import PostItem from './PostItem'
import ShowMsg from './ShowMsg'

class PostList extends React.Component {
  props: {
    dispatch: Function,
    posts: Data,
    handleClickCreate: Function,
    handleClickRemove: Function
  }
  removePost = this.removePost.bind(this)
  createPost = this.createPost.bind(this)

  componentDidMount() {
    const { posts, dispatch } = this.props

    if (posts.data.length === 0) {
      dispatch(loadPostData())
    }
  }

  createPost(obj: Object) {
    this.props.handleClickCreate(obj)
  }

  removePost(event: SyntheticEvent, id: string) {
    event.preventDefault()
    this.props.handleClickRemove(id)
  }

  render() {
    const { data, completed, message, error } = this.props.posts

    if (completed) {
      return (
        <div className="app-content-grid"> 
          <ShowMsg message={message} error={error} next={true} />
          <PostItem label="Create Post" handlePost={this.createPost} />
          <article className="app-grid">
            <h2 className="app-grid-header tit-section">Posts</h2>
            <div className="app-grid-body">
              {data.length > 0 && data.map(item => 
                <div className="app-grid-list" key={item._id}>
                  <h3 className="app-grid-list-item1">{item.title}</h3>
                  <Link to={`/admin/posts/${item._id}`} className="app-grid-list-item2 btn btn-icon icon-pen-angled"></Link>
                  <button 
                    onClick={(e) => this.removePost(e, item._id)}
                    className="app-grid-list-item3 btn btn-icon icon-trash-can"></button>
                </div>
              )}
              {data.length === 0 && 
                <div className="app-grid-list">
                  <h3 className="app-grid-list-item1 txt">
                    No posts created.
                  </h3>
                </div>
              }
            </div>
          </article>
        </div>
      )
    }

    return <Loader msg={message} />
  }
}

export default connect()(PostList)