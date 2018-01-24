// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loadPostData } from '../actions/postActionCreators'
import Loader from './Loader'
import CreatePost from './CreatePost'

class PostList extends React.Component {
  props: {
    dispatch: Function,
    posts: Data,
    user: User,
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

  removePost(id: string) {
    this.props.handleClickRemove(id)
  }

  render() {
    const { data, completed, message } = this.props.posts
    const { id } = this.props.user.data

    if (completed) {
      return (
        <div className="app-content-grid"> 
          <CreatePost id={id} createPost={this.createPost} />
          <hr />
          {data.map(item => 
            <article className="app-list" key={item._id}>
              <h2>{item.title}</h2>
              <Link to="/" className="btn btn-icon icon-pen-angled"></Link>
              <button 
                onClick={this.removePost(item._id)}
                className="btn btn-icon icon-trash-can"></button>
            </article>
          )}
        </div>
      )
    }

    return <Loader msg={message} />
  }
}

export default connect()(PostList)