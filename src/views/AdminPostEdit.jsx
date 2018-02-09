// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import ShowMsg from '../components/ShowMsg'
import Loader from '../components/Loader'
import AdminPostItem from '../components/AdminPostItem'
import { loadPostItem, updatePostData } from '../actions/postActionCreators'
import { isAuthenticated } from '../actions/userActionCreators'

class AdminPostEdit extends React.Component {
  props: {
    dispatch: Function,
    post: Item,
    authenticate: Auth,
    match: Object
  }

  updatePost = this.updatePost.bind(this)

  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(loadPostItem(match.params.id))
    dispatch(isAuthenticated())
  }

  updatePost(obj: Object, id: string) {
    const { dispatch } = this.props
    dispatch(updatePostData(obj, id))
  }

  render() {
    const { message, data, error, completed } = this.props.post

    if (completed) {
      return (
        <section className="app-view pb5">
          <Helmet 
            title="Admin page" 
            meta={[
              { name: "description", content: "Admin page" },
              { property: "og:title", content: "Admin page" }
            ]}
          />  
          <ShowMsg message={message} error={error} next={true} />
          <AdminPostItem 
            label="Update post" 
            handlePost={(obj, id) => this.updatePost(obj, id)} 
            data={data}
          />
        </section>
      )
    }

    return (
      <div className="app-view app-view-centered">
        <Loader msg={message} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  authenticate: state.authenticate,
  post: state.post, 
})

export default connect(mapStateToProps)(AdminPostEdit)