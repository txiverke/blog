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
// $FlowFixMe
import pdf from '../assets/files/XavierVilaAlbiol_CV_en.pdf'

class About extends React.Component {
  state = {
    txtMessage: '',
    next: true
  }
  
  props: {
    user: Item,
    dispatch: Function,
    location: Object
  }

  renderMsg = this.renderMsg.bind(this)

  componentDidMount() {
    const { dispatch, user } = this.props
    
    if (Object.keys(user.data).length === 0) {
      dispatch(loadUserData(config.api.profileId))
    }
  }

  renderMsg() {
    this.setState({
      txtMessage: 'Thanks for downloading my Résumé.'
    })
  }

  render() {
    const { completed, data, message, error } = this.props.user
    const { txtMessage, next } = this.state

    if (completed) {
      return (
        <section className="app-view app-view-centered">
          <Helmet 
            title="About me" 
            meta={[
              { name:"description", content: `${data.bio}` },
              { property: "og:title", content: `${data.firstname} ${data.lastname} - ${data.job}` }
            ]}
          />
          <ButtonBack />
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
            <h2 className="subtit-section-view">{data.job}</h2>
            <p className="txt txt-center">{data.bio}</p>
            <a
              href={pdf}
              download="resume.pdf" 
              className="btn btn-centered mt10"
              onClick={this.renderMsg}>
              <span className="icon-cloud-download mr5"></span>
              Download résumé
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
  
const mapStateToProps = state => ({ user: state.user })

export const Unwrapped = About
export default connect(mapStateToProps)(About)