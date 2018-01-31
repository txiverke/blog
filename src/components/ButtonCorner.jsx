// @flow

import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  label: string,
  styles: string
}

const ButtonCorner = ({ label, styles }: Props) => 
  <Link
    to="/" 
    className="btn btn-icon tr1 txt-tiny">
    <span className={`mr5 ${styles}`}></span>
    {label}
  </Link>

ButtonCorner.defaultProps = {
  styles: 'icon-chevron-left'
}

export default ButtonCorner