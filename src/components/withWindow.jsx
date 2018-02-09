import React from 'react'

const withWindow = (Component: React$Component<*,*,*>) => (
  class extends React.Component {
    state = {
      scroll: false
    }

    handleScroll = this.handleScroll.bind(this)

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
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