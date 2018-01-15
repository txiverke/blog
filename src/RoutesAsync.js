import React from 'react'

import Loading from './components/Loading'

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
      return <this.component {...this.props.props} />;
    }

    return <Loading />;
  }
}

export default RoutesAsync