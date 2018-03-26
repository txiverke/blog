import React from 'react'

const withWindow = (Component: Class<React$Component<*, *, *>>) => (
  class extends React.Component {
    state = {
      scroll: false
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
      if (window.scrollY > 10) {
        this.setState({ scroll: true })
      } else {
        this.setState({ scroll: false })
      }
    }

    render() {
      return <Component {...this.props} {...this.state} />
    }
  }
)

export default withWindow