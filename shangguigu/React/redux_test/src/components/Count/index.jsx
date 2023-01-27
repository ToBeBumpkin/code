import React, { Component } from 'react'

export default class Count extends Component {
    state = { count: 0, value: 1 }
    selectNum = (event) => {
        this.setState({ value: event.target.value })
    }
    increment = () => {
        const { count, value } = this.state
        this.setState({ count: count + value * 1 })
    }
    decrement = () => {
        const { count, value } = this.state
        this.setState({ count: count - value * 1 })
    }
    incrementIfOdd = () => {
        const { count, value } = this.state
        if (count % 2 !== 0) {
            this.setState({ count: count + value * 1 })
        }
    }
    incrementAsync = () => {
        const { count, value } = this.state
        setTimeout(() => {
            this.setState({ count: count + value * 1 })
        }, 500)
    }
    render() {
        return (
            <div>
                <h1>当前求和:{this.state.count}</h1>
                <select onChange={event => this.selectNum(event)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>加</button>
                <button onClick={this.decrement}>减</button>
                <button onClick={this.incrementIfOdd}>偶数加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
