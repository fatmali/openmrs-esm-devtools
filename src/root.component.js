import React from 'react'

export default class Root extends React.Component {
  state = {
    catastrophicError: false
  }
  render() {
    return this.state.catastrophicError ? null : <div>Habari, from Kenya!</div>
  }
  componentDidCatch() {
    this.setState({catastrophicError: true})
  }
}