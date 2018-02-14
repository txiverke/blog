// @flow

import { connect } from 'react-redux'

import AdminPostList from '../components/AdminPostList'
import { createPostData } from '../actions/postActionCreators'

const mapStateToProps = (state: Object) => ({ posts: state.posts })

const mapDispatchToProps = (dispatch: Function) => ({
  handleClickCreate: (obj: Object) => dispatch(createPostData(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPostList)