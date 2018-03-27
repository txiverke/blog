// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Loader from '../components/Loader'
import ButtonBack from '../components/ButtonBack'
import { loadProjectData } from '../actions/projectActionCreators'
import { getItem } from '../utils/helpers'
import config from '../config'
import ReactMessagesExample from '../components/React-messages-example'

class ProjectView extends React.PureComponent {
  state = {
    data: {},
    render: ''
  }

  props: {
    dispatch: Function,
    match: Object,
    projects: Data
  }

  componentDidMount() {
    const { dispatch } = this.props
    const { data } = this.props.projects

    if (data.length === 0) {
      dispatch(loadProjectData())
    } else {
      const id = getItem(this.props.match.url, '-')
      this.getProject(data, id)
    }
  }

  componentWillReceiveProps(nextProps: Object) {
    const { data } = nextProps.projects

    if (data && data.length) {
      const id = getItem(this.props.match.url, '-')
      this.getProject(data, id)
    }
  }

  getProject(data: Array<Object>, id: string) {

      this.setState({ 
        data: data[0],
      })

      setTimeout(() => { 
        this.setState({ render: 'app-background-render' }) 
      })
    
  }

  render() {
    const { message } = this.props.projects
    const { data, render } = this.state

    if (Object.keys(data).length) {
      return (
        <section className="app-view-100">
          <Helmet 
            title={data.title} 
            meta={[
              { name:"description", content: data.summary },
              { property: "og:title", content: data.title }
            ]}
          />
          <ButtonBack />
          <article className="app-article-full">
            <figure className="app-article-figure">
              <img className={`app-article-figure-img ${render}`} src={`${config.api.public}/projects/${data.background}`} alt={data.title} />
            </figure>
            <div className="app-article-content-txt">
              <h1 className="app-article-full-title">{data.title}</h1>
              <h2 className="app-article-full-subtitle">{data.subtitle}</h2>
              <p>{data.summary}</p>
              <p>{data.content}</p>
              <ReactMessagesExample />
              <a className="btn" href={`https://${data.link}`} target="_blank">Check the project</a>
            </div>
          </article>
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

const mapStateToProps = state => ({ projects: state.projects})

export const Unwrapped = ProjectView
export default connect(mapStateToProps)(ProjectView)