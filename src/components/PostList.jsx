// @flow

import React from 'react'

type Props = {
  list: Array<Object>,
  DIC: Object,
}

const PostList = ({ list, DIC }: Props) => {
  const message = list.length === 0 ? <p className="txt txt-center">{DIC.NO_POSTS_MSG}</p> : ''

  return (
    <div className="app-article-wrapper">
      {list.map((item, index) => {
        const d = new Date(item.created).toDateString()
        const posClass = index%2 === 0 ? 'even' : 'odd'

        return (
          <article className={`app-article app-article-${posClass}`} key={item._id}>
            <div className="app-article-content">
              <figure className="app-article-img">
                <a 
                  className="btn btn-icon app-article-icon"
                  href={`https://twitter.com/intent/tweet?text=${item.title}&url=${item.link}&hashtags=${item.tags}`}
                  >
                  <span className="icon-twitter"></span>
                </a>
                <img className="bg-item" src={item.background} alt={item.title} />
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
                <small className="app-article-date">{`${DIC.POSTED_AT} ${String(d)}`}</small>
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