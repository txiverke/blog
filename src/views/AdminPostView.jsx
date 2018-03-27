// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import ReactMessages from 'react-messages'
import { Redirect } from 'react-router-dom'

import Loader from '../components/Loader'
import AdminPostItem from '../components/AdminPostItem'
import { loadPostItem, updatePostData } from '../actions/postActionCreators'
import { isAuthenticated } from '../actions/userActionCreators'

class AdminPostView extends React.Component {
  state = {
    data: {}
  }

  props: {
    dispatch: Function,
    item: Item,
    authenticate: Auth,
    match: Object
  }

  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(loadPostItem(match.params.id))
    dispatch(isAuthenticated())
  }

  componentWillReceiveProps(nextProps: Object) {
    this.setState({ data: nextProps.item.data })
  }

  updatePost = (obj: Object, id: string) => {
    if (Object.keys(obj).length && id.length) {
      const { dispatch } = this.props
      dispatch(updatePostData(obj, id))
    } 
  }

  render() {
    const { message, error, completed } = this.props.item
    const { data } = this.state
    const isAuthenticate = this.props.authenticate.data

    if(!isAuthenticate) return <Redirect to="/" />

    if (isAuthenticate && completed) {
      return (
        <section className="app-view pb5">
          <Helmet 
            title="Admin page" 
            meta={[
              { name: "description", content: "Admin page" },
              { property: "og:title", content: "Admin page" }
            ]}
          />  
          <ReactMessages message={message} error={error} next={true} />
          <AdminPostItem 
            label="Update post" 
            handlePost={(obj, id) => this.updatePost(obj, id)} 
            data={data}
          />
        </section>
      )
    } else if (!isAuthenticate) {
      return <Redirect to="/" />
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
  item: state.item, 
})

export const Unwrapped = AdminPostView
export default connect(mapStateToProps)(AdminPostView)