// @flow

import React from 'react'

class ShowMsg extends React.Component {
  state = {
    message: '',
    hidden: true
  }

  timeout = null

  props: {
    message: string,
    next: boolean,
    error?: boolean,
    duration?: number,
  }

  static defaultProps = {
    error: true,
    duration: 2000,
  }

  componentDidMount() {
    const { next, message } = this.props

    if (this.state.message !== message && next) {
      this.setValues(this.props)
    }
  }

  componentWillReceiveProps(nextProps: Object) {
    const { next, message } = this.props

    if (this.state.message !== message && next) {
      this.setValues(nextProps)
    }
  }

  componentWillUnmount() {
    this.reset()
  }

  setValues(nextProps: Object) {
    const { duration, message } = nextProps
    
    this.reset()
    this.setState({ message, hidden: false })
    this.timeout = setTimeout(() => { this.setState({ hidden: true }) }, duration)
  }

  reset() {
    clearTimeout(this.timeout)
  }
 
  render() {
    const { error } = this.props
    const { hidden, message } = this.state
    const style = error ? '-error' : ''
    const icon = error ? 'alert-triangle' : 'thumbs-up'
    const classHidden = hidden ? 'hidden' : ''

    if (!hidden && message) {
      return (
        <div className="app-message">
          <p className={`app-message-item txt-message${style} ${classHidden}`}>
            <span className={`icon-${icon}`}></span>&nbsp;&nbsp; {message}
          </p>
        </div>
      )
    }

    return null
  }
}

export default ShowMsg