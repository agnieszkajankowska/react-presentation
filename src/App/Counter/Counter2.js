import React from 'react'
import {ProgressBar, Button} from 'react-bootstrap'


export class Counter2 extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }
    }

    render() {

        this.increaseBarValue = () =>
            this.setState({value: Math.min(this.state.value + 1, this.props.maxValue)})

        this.decreaseBarValue = () =>
            this.setState({value: Math.max(this.state.value - 1, this.props.minValue)})

        return (
            <div>
                <h1>Counter</h1>
                <p>Value is: {this.state.value}</p>
                <ProgressBar active bsStyle={this.props.style}
                             now={this.state.value}
                             min={this.props.minValue}
                             max={this.props.maxValue}/>
                <Button bsStyle="primary" onClick={this.increaseBarValue}>Increase</Button>
                <Button bsStyle="primary" onClick={this.decreaseBarValue}>Decrease</Button>
            </div>
        )
    }
}

export default Counter2
