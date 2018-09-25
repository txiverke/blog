// @flow

import React from 'react'

import landingBg from '../assets/imgs/bg_1.jpg'

type Props = {
  title: string
}

type State = {
  render: string
}

class Background extends React.PureComponent<Props, State> {
  state: State = {
    render: ''
  }
  
  props: Props

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