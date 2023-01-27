import React, { Component } from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

export default class App extends Component {
  state = {name:'小明'}
  add = (params) => {
    console.log(params);
  }
  render() {
    return (
      <div>
        <Hello name={this.state.name} add={this.add} />
        <Welcome />
      </div>
    )
  }
}
