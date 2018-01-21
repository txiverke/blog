// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Loader from '../components/Loader'
import { loadUserData } from '../actionCreators'
import avatar from '../assets/imgs/about.jpg'
import config from '../config'

class About extends React.Component {
  props: {
    user: User,
    dispatch: Function
  }

  componentDidMount() {
    const { dispatch, user } = this.props
    
    if (Object.keys(user.data).length === 0) {
      dispatch(loadUserData(config.api.profileId))
    }
  }

  render() {
    const { completed, data, message } = this.props.user

    if (completed) {
      return (
        <section className="app-view">
          <Helmet 
            title="About me" 
            meta={[
              { name:"description", content: `${data.bio}` },
              { property: "og:title", content: `${data.firstname} ${data.lastname} - ${data.job}` }
            ]}
          />
          <article className="app-content-section">
            <figure>
              <img className="roundedImg" src={avatar} alt="A pic of Xavi Vilà" />
            </figure>
            <h2>{data.firstname} {data.lastname}</h2>
            <h3>{data.job}</h3>
            <p>{data.bio}</p>
          </article>
        </section>
      )
    }

    return <Loader msg={message} />
  }
}
  
const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(About)