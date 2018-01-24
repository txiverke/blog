// @flow

import { connect } from 'react-redux'

import PostList from '../components/PostList'
import { createPostData, removePostData } from '../actions/postActionCreators'

const mapStateToProps = (state: Object) => ({
  posts: state.posts,
  user: state.user
})

const mapDispatchToProps = (dispatch: Function) => ({
  handleClickCreate: (obj: Object) => dispatch(createPostData(obj)),
  handleClickRemove: (id: string) => dispatch(removePostData(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)