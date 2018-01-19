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
    const module = await this.props.loadingPromise
    this.component = module.default
    this.setState({ loaded: true })
  }

  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    }

    return <Loader msg='Loading...'/>
  }
}

export default RoutesAsync