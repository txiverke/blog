// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
  reset: boolean
}
type State = {
  active: boolean
}

class Tag extends React.PureComponent<Props, State> {
  state: State = {
    active: true,
  }

  props: Props

  componentWillReceiveProps(nextProps: Object) {
    if (nextProps.reset) {
      this.setState({ active: true })
    }
  }

  handleClick  = (e: InputEvent) => { 
    const value = e.target.dataset.value

    this.setState(
      ({ active }) => ({ active: !active }), 
      () => { this.props.handleClick(value) }
    )  
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