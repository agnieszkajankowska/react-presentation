import React from 'react'

class LifecycleView extends React.Component {

    constructor () {
        super()

        this.state = {
            counter: 0
        }
    }

    componentDidMount () {
        console.log('did mount')
        setInterval(
            () => this.setState({ counter: this.state.counter + 1 }),
            1000
        )
    }

    componentWillMount () {
        console.log('will mount')
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log('check if it should update')
        return true
    }

    componentWillUpdate (nextProps, nextState) {
        console.log('will update')
    }

    render () {
        console.log('render')
        return (
            <div>
                <h1>Lifecycle demo</h1>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}

export default LifecycleView