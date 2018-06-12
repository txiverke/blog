// @flow

import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  label: string,
  route: string,
}

const ButtonBack = ({ label, route }: Props) => 
  <Link
    to={route} 
    className="app-header-nav-item btn btn-icon btn-back txt-tiny tr">
    <span className={`mr5 icon-cheveron-left`}></span>
    <span className="btn-back-txt">{label}</span>
  </Link>

ButtonBack.defaultProps = {
  label: 'Back',
  route: '/'
}

export default ButtonBack