// @flow

import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  label: string,
  handleClick: Function
}

const SignOut = ({ label, handleClick }: Props) => (
  <Link 
    to="/"
    className="app-content-top-left btn btn-close icon-cancel-circle"
    onClick={handleClick}
  >
    <span className="hidden">{label}</span>
  </Link>
)

export default SignOut