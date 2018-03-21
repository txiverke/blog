// @flow

import React from 'react'

import landingBg from '../assets/imgs/bg_1.png'

class Background extends React.PureComponent {
  state = {
    render: ''
  }
  
  props: {
    title: string,
  }

  componentDidMount() {
    setTimeout(() => { 
      this.setState({ render: 'app-background-render' }) 
    })
  }

  render() {
    const render = this.state.render
    
    return (
      <figure className={`app-background ${render}`}>
        <img 
          className="app-background-img" 
          src={landingBg} 
          alt={`Background of ${this.props.title}`} 
        />
      </figure>
    )
  }
}

export default Background