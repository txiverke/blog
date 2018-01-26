// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loadPostData } from '../actions/postActionCreators'
import Loader from './Loader'
import CreatePost from './CreatePost'
import ShowMsg from './ShowMsg'

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

  removePost(event: SyntheticEvent, id: string) {
    event.preventDefault()
    this.props.handleClickRemove(id)
  }

  render() {
    const { data, completed, message, error } = this.props.posts
    const { id } = this.props.user.data

    if (completed) {
      return (
        <div className="app-content-grid"> 
          <ShowMsg message={message} error={error} next={true} />
          <CreatePost id={id} createPost={this.createPost} message={message} completed={completed} />
          <article className="app-grid">
            <h2 className="app-grid-header tit-section">Posts</h2>
            {data.length > 0 && data.map(item => 
              <article className="app-grid-body" key={item._id}>
                <h2>{item.title}</h2>
                <Link to="/" className="btn btn-icon app-grid-btn icon-pen-angled"></Link>
                <button 
                  onClick={(e) => this.removePost(e, item._id)}
                  className="btn btn-icon app-grid-btn icon-trash-can"></button>
              </article>
            )}
          </article>
        </div>
      )
    }

    return <Loader msg={message} />
  }
}

export default connect()(PostList)