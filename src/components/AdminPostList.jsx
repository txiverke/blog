// @flow

import React from 'react'
import { connect } from 'react-redux'
import ReactMessages from 'react-messages'

import AdminPostItem from './AdminPostItem'
import AdminList from '../containers/AdminList'
import Loader from './Loader'
import { loadPostData } from '../actions/postActionCreators'

type Props = {
  dispatch: Function,
  posts: Data,
  handleClickCreate: Function,
}

class AdminPostList extends React.Component<Props> {
  props: Props
  
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
          <ReactMessages 
            message={message} 
            error={error} 
            next={true} 
          />
          <AdminPostItem 
            label="Create Post" 
            handlePost={obj => this.createPost(obj)} 
          />
          <AdminList type="posts" data={data} />
        </div>
      )
    }

    return <Loader msg={message} />
  }
}

export const Unwrapped = AdminPostList
export default connect()(AdminPostList)