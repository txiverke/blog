// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Loader from '../components/Loader'
import ShowMsg from '../components/ShowMsg'
import ButtonBack from '../components/ButtonBack'
import { loadUserData } from '../actions/userActionCreators'
import avatar from '../assets/imgs/about.jpg'
import config from '../config'
import { getDictionary } from '../utils/dictionary'
// $FlowFixMe
import pdf from '../assets/files/XavierVilaAlbiol_CV_en.pdf'

class About extends React.Component {
  state = {
    txtMessage: '',
    next: false,
    DIC: {}
  }
  
  props: {
    user: Item,
    dispatch: Function,
    location: Object,
    language: Object
  }

  componentDidMount() {
    const { dispatch, user, language } = this.props

    this.setState({ DIC: getDictionary(language.current)})
    
    if (Object.keys(user.data).length === 0) {
      dispatch(loadUserData(config.api.profileId))
    }
  }

  componentWillReceiveProps(nextProps: Object) {
    const old = this.props.language.current
    const current = nextProps.language.current
    if (old !== current) {
      this.setState({ DIC: getDictionary(current)})
    }
  }

  renderMsg = () => {
    const { DIC } = this.state

    this.setState({
      txtMessage: DIC.RESUME,
      next: true
    })

    setTimeout(() => this.setState({ next: false}))
  }

  render() {
    const { completed, data, message, error } = this.props.user
    const lang = this.props.language.current
    const { txtMessage, next, DIC } = this.state
    const bio = lang === 'eng' ? data.bio : data.bio_cat
    const job = lang === 'eng' ? data.job : data.job_cat

    if (completed) {
      return (
        <section className="app-view app-view-centered">
          <Helmet 
            title={DIC['ABOUT-ME']} 
            meta={[
              { name:"description", content: `${bio}` },
              { property: "og:title", content: `${data.firstname} ${data.lastname} - ${job}` }
            ]}
          />
          <ButtonBack label={DIC.BACK} />
          <ShowMsg message={txtMessage} next={next} error={error} />
          <article className="app-content-section">
            <figure className="app-content-avatar">
              <img 
                className="roundedImg" 
                src={avatar} 
                alt={`A pic of: ${data.firstname}`} 
            />
            </figure>
            <h1 className="tit-section-view">{data.firstname} {data.lastname}</h1>
            <h2 className="subtit-section-view">{job}</h2>
            <p className="txt txt-center">{bio}</p>
            <a
              href={pdf}
              download="resume.pdf" 
              className="btn btn-centered mt10"
              onClick={this.renderMsg}>
              <span className="icon-cloud-download mr5"></span>
              {DIC.DOWNLOAD_RESUME}
            </a>
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
  
const mapStateToProps = state => ({ 
  user: state.user,
  language: state.language 
})

export const Unwrapped = About
export default connect(mapStateToProps)(About)