// @flow

import React from 'react'

import loader from '../assets/imgs/loader.png'

type Props = {
  msg: string
}

const Loader = (props: Props) => 
  <div className="app-loader"> 
    <img src={loader} className="app-loader-icon icon-spinner3" alt="Loader icon"/>
    <h3 className="app-loader-msg">{props.msg}</h3>
  </div>

export default Loader