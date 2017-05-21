import React from 'react'
import { ProgressBar } from 'react-bootstrap'


export class Counter extends React.Component {
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>Value is:</p>
                <ProgressBar bsStyle="danger" now={50} />
            </div>
        )
    }
}

export default Counter