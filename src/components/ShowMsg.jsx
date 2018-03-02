// @flow

import React from 'react'

class ShowMsg extends React.PureComponent {
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
    this.setValues(this.props)
  }

  componentWillReceiveProps(nextProps: Object) {
    const { next, message } = nextProps

    if (this.state.message !== message && next) {
      this.setValues(nextProps)
    }
  }

  componentWillUnmount() {
    this.reset()
  }

  setValues(props: Object) {
    const { duration, message } = props
    
    this.reset()
    this.setState({ message, hidden: false })
    this.timeout = setTimeout(() => { 
      this.setState({ message: '', hidden: true }) 
    }, duration)
  }

  reset() {
    clearTimeout(this.timeout)
  }
 
  render() {
    const { error } = this.props
    const { hidden, message } = this.state
    const style = error ? '-error' : ''
    const icon = error ? 'alert-triangle' : 'like'
    const classHidden = hidden ? 'hidden' : ''

    if (!hidden && message) {
      return (
        <div className="app-message">
          <p className={`app-message-item txt-message${style} ${classHidden}`}>
            <span className={`mr5 icon-${icon}`}></span>
            <span className="app-message-txt test">{message}</span>
          </p>
        </div>
      )
    }

    return null
  }
}

export default ShowMsg