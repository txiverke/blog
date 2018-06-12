// @flow

import React from 'react'
import ReactMessages from 'react-messages'

type State = {
  next: boolean,
  message: string,
  newMessage: string,
  icon: string,
  duration: number,
  error: boolean
}

class ReactMessagesExample extends React.PureComponent<*, State> {
  state: State = {
    next: false,
    message: 'Just an initial message',
    newMessage: '',
    icon: 'heart',
    duration: 1,
    error: false
  }

  handleSelect = (e: InputEvent) => {
    const icon = e.target.value
    this.setState({ icon, next: false })
  }

  handleDuration = (e: InputEvent) => {
    const duration = Number(e.target.value) 
    this.setState({ duration, next: false })
  }

  handleError = () => {
    const { error } = this.state
    this.setState( prevState => ({ error: !prevState.error, next: false }))
  }

  handleChange = (e: InputEvent) => {
    const newMessage = e.target.value

    this.setState({ newMessage, next: false })
  }

  handleClick = () => {
    const { newMessage } = this.state

    this.setState({
      message: newMessage,
      newMessage: '',
      next: true
    })
  }

  render() {
    const { next, message, newMessage, icon, duration, error } = this.state
    const durationInMilliseconds = duration * 1000
    return (
      <article>
        <h3>Options:</h3>
        <ul className="app-list">
          <li className="app-list-item">
            <label className="txt" htmlFor='icon'>
              Choose the icon:<br/>
              <select className="app-select" onChange={this.handleSelect}>
                <option default value="heart">Heart</option>
                <option value="warning">Warning</option>
                <option value="info">Info</option>
                <option value="thumbs-up">Thumbs up</option>
                <option value="thumbs-down">Thumbs down</option>
              </select>
            </label>
          </li>
          <li className="app-list-item">
            <label className="txt" htmlFor="duration">
              Choose the duration:<br />
              <input 
                className="app-range"
                onChange={this.handleDuration}
                value={duration}
                type='range' 
                min='1' 
                max='10' 
                step='1' 
              />
              <span>{duration} second/s</span>
            </label>
          </li>
          <li className="app-list-item">
            <label className="txt" htmlFor="error">
              Choose if the message is an error:<br />
              <input id="isError" onChange={this.handleError} type="radio" name="error" value={true} checked={error === true}/> Is an error &nbsp;
              <input id="isNotError" onChange={this.handleError} type="radio" name="error" value={false} checked={error === false}/> Is not an error
            </label>
          </li>
          <li>
            <label className="txt" htmlFor="text">
              Fill the input and press the button to render a new message<br />
              <input type="text" className="app-form-input-with-button" onChange={this.handleChange} value={newMessage} />
              <button className="btn app-form-input-button" onClick={this.handleClick}>
                Show
              </button>
            </label>
          </li>
        </ul>
        <ReactMessages 
          message={message} 
          next={next} 
          error={error} 
          icon={icon}
          duration={durationInMilliseconds}
        />
      </article>
    )
  }
}

export default ReactMessagesExample