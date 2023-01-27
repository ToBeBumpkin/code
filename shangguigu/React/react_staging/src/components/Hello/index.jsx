import React, { Component } from 'react'

export default class index extends Component {
    addAge = () => {
        this.props.add({age:12})
    }
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <button onClick={this.addAge}>传给父组件</button>
            </div>
        )
    }
}
