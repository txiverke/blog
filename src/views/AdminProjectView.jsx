// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import ShowMsg from '../components/ShowMsg'
import Loader from '../components/Loader'
import AdminProjectItem from '../components/AdminProjectItem'
import { loadProjectItem, updateProjectData } from '../actions/projectActionCreators'
import { isAuthenticated } from '../actions/userActionCreators'

class AdminProjectView extends React.Component {
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
    dispatch(loadProjectItem(match.params.id))
    dispatch(isAuthenticated())
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.item.data})
  }

  updateProject = (obj: Object, id: string) => {
    const { dispatch } = this.props
    dispatch(updateProjectData(obj, id))
  }

  render() {
    const { message, error, completed } = this.props.item
    const { data } = this.state

    if (completed && Object.keys(data).length) {
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

export default connect(mapStateToProps)(AdminProjectView)