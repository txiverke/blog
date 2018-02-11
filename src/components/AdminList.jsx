// @flow

import React from 'react'
import { Link } from 'react-router-dom' 

type Props = {
  type: string,
  data: Array<Object>,
  handleRemove: Function
}

const AdminList = ({ type, data, handleRemove }: Props) => {
  const title = type.charAt(0).toUpperCase() + type.slice(1)
  
  return (
    <article className="app-grid">
      <h2 className="app-grid-header tit-section">{title}</h2>
      <div className="app-grid-body">
        {data.length > 0 && data.map(item => 
          <div className="app-grid-list" key={item._id}>
            <h3 className="app-grid-list-item1">{item.title}</h3>
            <Link to={`/admin/${type}/${item._id}`} className="app-grid-list-item2 btn btn-icon icon-pen-angled"></Link>
            <button 
              onClick={() => handleRemove(type, item._id)}
              className="app-grid-list-item3 btn btn-icon icon-trash-can"></button>
          </div>
        )}
        {data.length === 0 && 
          <div className="app-grid-list">
            <h3 className="app-grid-list-item1 txt">
              {`No ${type} created.`}
            </h3>
          </div>
        }
      </div>
    </article>
  )
}

export default AdminList