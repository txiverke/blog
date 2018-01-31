// @flow

import React from 'react'

class Tag extends React.PureComponent {
  state = {
    active: true
  }

  props: {
    label: string,
    handleClick: Function
  }

  handleClick = this.handleClick.bind(this)

  handleClick (e: InputEvent) {
    e.preventDefault()
    
    this.setState({ active: !this.state.active })
    this.props.handleClick(e.target.dataset.value)
  }

  render() {
    const { label } = this.props
    const { active } = this.state
    const alphaClass = active ? '' : '-alpha'

    return (
      <button
        onClick={this.handleClick}
        className={`app-search-item${alphaClass}`}
        data-value={label}
      >
        {label}
      </button>
    )
  }
}

export default Tag