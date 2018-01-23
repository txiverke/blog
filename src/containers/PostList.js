// @flow

import { connect } from 'react-redux'

import PostList from '../components/PostList'
import { removePostData } from '../actionCreators'

const mapStateToProps = (state: Object) => ({
  posts: state.posts
})

const mapDispatchToProps = (dispatch: Function) => ({
  handleClickRemove: (id: string) => dispatch(removePostData(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)