// @flow

import React from 'react'

import landingBg from '../assets/imgs/bg_1.png'
import aboutBg from '../assets/imgs/bg_2.png'

class Background extends React.Component {
  state = {
    render: '',
    img: null
  }
  props: {
    name: string,
    title: string,
    match: Object,
    location: Object,
    history: Object,
    staticContext: any
  }
  componentDidMount() {
    setTimeout(() => { 
      this.setState({ render: 'app-background-render' }) 
    })
  }
  checkImgs() {
    switch(this.props.location.pathname) {
      case '/about-me':
        return aboutBg
      default:
        return landingBg
    }
  }
  render() {
    const render = this.state.render
    
    return (
      <figure className={`app-background ${render}`}>
        <img 
          className="app-background-img" 
          src={this.checkImgs()} 
          alt={`Background of ${this.props.title}`} 
        />
      </figure>
    )
  }
}

export default Background