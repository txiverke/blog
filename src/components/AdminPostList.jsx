// @flow

import React from 'react'
import { connect } from 'react-redux'

import AdminPostItem from './AdminPostItem'
import AdminList from '../containers/AdminList'
import Loader from './Loader'
import ShowMsg from './ShowMsg'
import { loadPostData } from '../actions/postActionCreators'

class AdminPostList extends React.Component {
  props: {
    dispatch: Function,
    posts: Data,
    handleClickCreate: Function,
  }
  
  componentDidMount() {
    const { posts, dispatch } = this.props

    if (posts.data.length === 0) {
      dispatch(loadPostData())
    }
  }

  createPost = (obj: Object) => {
    this.props.handleClickCreate(obj)
  }

  render() {
    const { data, completed, message, error } = this.props.posts

    if (completed) {
      return (
        <div className="app-content-grid"> 
          <ShowMsg message={message} error={error} next={true} />
          <AdminPostItem label="Create Post" handlePost={obj => this.createPost(obj)} />
          <AdminList type="posts" data={data} />
        </div>
      )
    }

    return <Loader msg={message} />
  }
}

export default connect()(AdminPostList)