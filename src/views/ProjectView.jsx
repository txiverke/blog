// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import Loader from '../components/Loader'
import ButtonBack from '../components/ButtonBack'
import { loadProjectData } from '../actions/projectActionCreators'
import { getItem, getSlug } from '../utils/helpers'
import config from '../config'
import ReactMessagesExample from '../components/React-messages-example'

type Props = {
  dispatch: Function,
  match: Object,
  projects: Data
}

type State = {
  data: Object,
  next: string,
  prev: string,
  notFound: boolean,
  render: string
}

class ProjectView extends React.PureComponent<Props, State> {
  state: State = {
    data: {},
    next: '',
    prev: '',
    notFound: false,
    render: ''
  }

  props: Props

  componentDidMount() {
    const { dispatch } = this.props
    const { data } = this.props.projects

    if (data.length === 0) {
      dispatch(loadProjectData())
    } else {
      const id = getItem(this.props.match.params.id, '-')
      this.getProject(data, id)
    }
  }

  componentWillReceiveProps(nextProps: Object) {
    const { data } = nextProps.projects

    if (data && data.length) {
      const id = getItem(this.props.match.params.id, '-')
      this.getProject(data, id)
    }
  }

  getProject(data: Array<Object>, id: string) {
    const result = data.filter(item => item._id === id)
    const index = data.map(item => item._id).indexOf(id)

    if (index !== -1) {
      const next = data.length === index + 1 ? 0 : index + 1
      const prev = index === 0 ? data.length - 1 : index - 1

      this.setState({ 
        data: result[0],
        next: getSlug(String(`${data[next].title} ${data[next]._id}`)),
        prev: getSlug(String(`${data[prev].title} ${data[prev]._id}`)),
      })
      setTimeout(() => { 
        this.setState({ render: 'app-background-render' }) 
      })
    } else {
      this.setState({ notFound: true})
    }
  }

  getExtraContent = (content: string) => {
    switch(content) {
      case 'React-messages-example': return <ReactMessagesExample />
      default: return ''
    }
  }

  render() {
    const { message } = this.props.projects
    const { data, next, prev, notFound, render } = this.state
    const contentExtra = data.extra ? this.getExtraContent(data.extra) : ''

    if (Object.keys(data).length && !notFound) {
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
              <nav className="app-article-nav">
                <Link className="btn-prev icon-cheveron-left" to={prev}>
                  <span className="hidden">Prev</span>
                </Link>
                <Link className="btn-next icon-cheveron-left" to={next}>
                  <span className="hidden">Next</span>
                </Link>
              </nav>
              <p>{data.summary}</p>
              <p>{data.content}</p>
              {contentExtra}
              <a className="btn" href={`https://${data.link}`} target="_blank">Check the project</a>
            </div>
          </article>
        </section>
      )
    } else if(Object.keys(data).length && notFound) {
      return <Redirect to="/projects" />
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