// @flow

import React from 'react'

import config from '../config'

type Props = {
  list: Array<Object>
}

const PostList = (list: Props) => {
  const message = list.list.length === 0 ? <p className="txt txt-center">Press some tag button to see the content.</p> : ''

  return (
    <div className="app-article-wrapper">
      {list.list.map((item, index) => {
        const d = new Date(item.created).toLocaleDateString()
        const posClass = index%2 === 0 ? 'even' : 'odd'

        return (
          <article className={`app-article app-article-${posClass}`} key={item._id}>
            <div className="app-article-content">
              <figure className="app-article-img">
                <img className="bg-item" src={`${config.api.public}/posts/${item.background}`} alt={item.title} />
              </figure>
              <h2 className="app-article-title">
                <a href={item.link} target="_blank">{item.title}</a>
              </h2>
              <p className="app-article-txt txt mt0">{item.content}</p>
              <p className="app-article-tags">
                <span className="app-article-tag">
                  <span>Tags : </span> 
                  {item.tags}
                </span>
                <small className="app-article-date">{`Posted at ${String(d)}`}</small>
              </p>
            </div>           
          </article>
        )
      })}
       {message}
    </div>
  )
}

export default PostList