// @flow

import React from 'react'

import Loader from './components/Loader'

class RoutesAsync extends React.Component {
  state = {
    loaded: false
  }

  props: {
    props: mixed,
    loadingPromise: Promise<{ default: Class<React.Component<*, *, *>> }>
  }

  component = null

  async componentDidMount() {
    const { default: component } = await this.props.loadingPromise
    this.component = component
    this.setState({ loaded: true })
  }

  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    }

    return (
      <div className="app-view app-view-centered">
        <Loader msg='Loading...' />
      </div>
    ) 
  }
}

export default RoutesAsync