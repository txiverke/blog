// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Loader from '../components/Loader'
import ShowMsg from '../components/ShowMsg'
import ButtonCorner from '../components/ButtonCorner'
import { loadPostData } from '../actions/postActionCreators'
import config from '../config'
import { getSlug } from '../utils/helpers'

class Posts extends React.Component {

  props: {
    dispatch: Function,
    posts: Data
  }

  componentDidMount() {
    const { dispatch, posts } = this.props
    
    if (posts.data.length === 0) {
      dispatch(loadPostData())
    }
  }
  
  render() {
    const { completed, data, message, error } = this.props.posts

    if (completed) {
      return (
        <section className="app-view-content">
          <Helmet 
            title="Posts" 
            meta={[
              { name:"description", content: "Posts about Frontend development" },
              { property: "og:title", content: "Posts about Frontend development" },
            ]}
          />
          <ButtonCorner label="Back" />
          {error && <ShowMsg message={message} error={error} next={completed} />}
          {data.map(item => {
            const title = getSlug(String(`${item.title} ${item._id}`))
            const d = new Date(item.created).toLocaleDateString()

            return (
              <article className="app-article mt10" key={item._id}>
                <figure className="app-article-img bg-list-wrapper">
                  <img className="bg-item" src={`${config.api.public}/posts/${item.background}`} alt={item.title} />
                </figure>
                <small className="app-article-date">{`Posted at ${String(d)}`}</small>
                <h2 className="app-article-title tit-article">{item.title}</h2>
                <p className="txt mt0">{item.content}</p>
                <a className="btn" href={item.link} target="_blank">Read it in medium</a>
              </article>
            )
          })}
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

const mapStateToProps = state => ({ posts: state.posts })
  
export default connect(mapStateToProps)(Posts)