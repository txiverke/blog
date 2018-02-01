// @flow

import React from 'react'

import ShowMsg from '../components/ShowMsg'
import config from '../config'

type Props = {
  list: Array<Object>
}

const PostList = (list: Props) => {
  const message = "Select amongst the different tag buttons to handle the content."
  const next = list.list.length === 0

  return (
    <div className="app-article-wrapper mt325">
      <ShowMsg message={message} error={false} next={next} />
      {list.list.map((item, index) => {
        const d = new Date(item.created).toLocaleDateString()
        const posClass = index%2 === 0 ? 'even' : 'odd'

        return (
          <article className={`app-article app-article-${posClass}`} key={item._id}>
            <div to={item.link} className="app-article-content">
              <figure className="app-article-img">
                <img className="bg-item" src={`${config.api.public}/posts/${item.background}`} alt={item.title} />
              </figure>
              <h2 className="app-article-title">
                <a href={item.link} target="_blank">{item.title}</a>
              </h2>
              <p className="app-article-txt txt mt0">{item.content}</p>
              <p className="app-article-tags">
                <span className="app-article-tag">
                  <span>Topics : </span> 
                  {item.tags}
                </span>
                <small className="app-article-date">{`Posted at ${String(d)}`}</small>
              </p>
            </div>
            <div className="app-article-bg"></div>
          </article>
        )
      })}
    </div>
  )
}

export default PostList