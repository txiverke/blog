// @flow

import React from 'react'

import config from '../config'

type Props = {
  data: Array<Object>
}

const PostList = (data: Props) => {
  return (
    <div className="mt325">
      {data.data.map((item, index) => {
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