// @flow

import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  label?: string,
  route?: string,
}

const ButtonBack = ({ label, route }: Props) => 
  <Link
    to={route} 
    className="app-header-nav-item btn btn-icon txt-tiny tr">
    <span className={`mr5 icon-cheveron-left`}></span>
    {label}
  </Link>

ButtonBack.defaultProps = {
  label: 'Back',
  route: '/'
}

export default ButtonBack