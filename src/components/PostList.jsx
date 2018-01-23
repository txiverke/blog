// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loadPostData } from '../actionCreators'
import Loader from './Loader'

class PostList extends React.Component {
  props: {
    dispatch: Function,
    posts: Data,
    handleClickRemove: Function
  }

  componentDidMount() {
    const { posts, dispatch } = this.props

    if (posts.data.length === 0) {
      dispatch(loadPostData())
    }
  }

  render() {
    const { data, completed, message } = this.props.posts
    const { handleClickRemove } = this.props

    if (completed) {
      return (
        <div className="app-content">
          {data.map(item => 
            <article className="app-list" key={item._id}>
              <h2>{item.title}</h2>
              <Link to="/" className="btn btn-icon icon-pen-angled"></Link>
              <button 
                onClick={handleClickRemove(item._id)}
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