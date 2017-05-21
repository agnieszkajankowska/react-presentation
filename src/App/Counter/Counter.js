import React from 'react'
import {ProgressBar, Button} from 'react-bootstrap'


export class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0,
            minValue: 0,
            maxValue: 20
        }
    }

    render() {

        this.increaseBarValue = () =>
            this.setState({value: Math.min(this.state.value + 1, this.state.maxValue)})

        this.decreaseBarValue = () =>
            this.setState({value: Math.max(this.state.value - 1, this.state.minValue)})

        const computedStyle = this.state.value < 5 ? "success" : (this.state.value > 15 ?
        "danger" : "warning")

        return (
            <div>
                <h1>Counter</h1>
                <p>Value is: {this.state.value}</p>
                <ProgressBar active bsStyle={computedStyle} now={this.state.value} max={this.state.maxValue}/>
                <Button bsStyle="primary" onClick={this.increaseBarValue}>Increase</Button>
                <Button bsStyle="primary" onClick={this.decreaseBarValue}>Decrease</Button>
            </div>
        )
    }
}

export default Counter
