// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Loading from '../components/Loading'
import { loadUserData } from '../actionCreators'
import avatar from '../assets/imgs/about.jpg'

class About extends React.Component {
  props: {
    user: Data,
    dispatch: Function
  }

  componentDidMount() {
    const { dispatch, user } = this.props
    
    if (user.data.length === 0) {
      dispatch(loadUserData())
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
              { name:"description", content: "Personal information of Xavier Vilà" },
              { property: "og:title", content: "About me" }
            ]}
          />
          {data.map(item =>
          <article key={item._id}className="app-content">
            <figure>
              <img
                className="roundedImg"
                src={avatar} alt="A pic of Xavi Vilà" />
            </figure>
            <h2>{item.username}</h2>
            <h3>frondend developer</h3>
            <p>{item.bio}</p>
          </article>
          )}
        </section>
      )
    }

    return <Loading msg={message} />
  }
}
  
const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(About)