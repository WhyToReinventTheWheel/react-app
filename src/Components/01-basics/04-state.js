import React, { Component } from 'react'

class StateExample extends Component {
    constructor() {
        super()
        this.state = {
            flag: false,
            message: 'Welcome Visitor',
            count: 0
        }
    }

    testClickHandler = () => {
        let message1
        if (this.state.flag) {
            message1 = 'Message 1'
        } else {
            message1 = 'Message 2'
        }

        this.setState({
            message: message1,
            count: this.state.count + 1,
            flag: !this.state.flag
        })
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h1>Count={this.state.count}</h1>
                <button onClick={this.testClickHandler}>StateChange</button>
            </div >
        )
    }
}

export default StateExample
