// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import ReactMessages from 'react-messages'
import { Redirect } from 'react-router-dom'

import Loader from '../components/Loader'
import AdminProjectItem from '../components/AdminProjectItem'
import { loadProjectItem, updateProjectData } from '../actions/projectActionCreators'
import { isAuthenticated } from '../actions/userActionCreators'

type Props = {
  dispatch: Function,
  item: Item,
  authenticate: Auth,
  match: Object
}

type State = {
  data: Object
}

class AdminProjectView extends React.Component<Props, State> {
  state: State = {
    data: {}
  }

  props: Props

  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(loadProjectItem(match.params.id))
    dispatch(isAuthenticated())
  }

  componentWillReceiveProps(nextProps: Object) {
    this.setState({ data: nextProps.item.data})
  }

  updateProject = (obj: Object, id: string) => {
    if(Object.keys(obj).length && id.length) {
      const { dispatch } = this.props
      dispatch(updateProjectData(obj, id))
    }
  }

  render() {
    const { message, error, completed } = this.props.item
    const { data } = this.state
    const isAuthenticate = this.props.authenticate.data

    if (!isAuthenticate) return <Redirect to="/" />

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
          <AdminProjectItem 
            label="Update project" 
            handleProject={(obj, id) => this.updateProject(obj, id)} 
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
  item: state.item, 
})

export const Unwrapped = AdminProjectView
export default connect(mapStateToProps)(AdminProjectView)