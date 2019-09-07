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
            message1 = 'Message1'
        } else {
            message1 = 'Message2'
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
                <h4>Message={this.state.message},
                        Count={this.state.count}</h4>
                <button onClick={this.testClickHandler}>StateChange</button>
            </div >
        )
    }
}

export default StateExample
